import fs from "fs/promises";
import path from "path";
import { Pool } from "pg";

const PRODUCTS_PATH = path.join(process.cwd(), "data", "products.json");
const CMS_PASSWORD = process.env.CMS_PASSWORD || "sampeadmin";
const DATABASE_URL = process.env.DATABASE_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

let pool;
const getPool = () => {
  if (!DATABASE_URL) return null;
  if (!pool) {
    pool = new Pool({ connectionString: DATABASE_URL });
  }
  return pool;
};

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
};

const readProductsFile = async () => {
  const raw = await fs.readFile(PRODUCTS_PATH, "utf8");
  return JSON.parse(raw);
};

const saveProductsFile = async (products) => {
  const payload = JSON.stringify(products, null, 2);
  await fs.writeFile(PRODUCTS_PATH, payload, "utf8");
};

const loadFromGitHub = async () => {
  const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/contents/data/products.json`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!response.ok) {
    throw new Error(`GitHub content fetch failed: ${response.status}`);
  }
  const fileData = await response.json();
  const content = Buffer.from(fileData.content, "base64").toString("utf8");
  return { products: JSON.parse(content), sha: fileData.sha };
};

const saveToGitHub = async (products, sha) => {
  const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/contents/data/products.json`;
  const payload = JSON.stringify(products, null, 2);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "CMS: update product listings",
      content: Buffer.from(payload, "utf8").toString("base64"),
      sha,
      branch: GITHUB_BRANCH,
    }),
  });
  if (!response.ok) {
    throw new Error(`GitHub save failed: ${response.status}`);
  }
};

const ensureProductsTable = async () => {
  const pool = getPool();
  if (!pool) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id text PRIMARY KEY,
      title text NOT NULL,
      category text NOT NULL,
      image text NOT NULL,
      description text NOT NULL,
      created_at timestamptz DEFAULT now()
    )
  `);
};

const readProductsDb = async () => {
  const pool = getPool();
  if (!pool) throw new Error("Database not configured.");
  await ensureProductsTable();
  const result = await pool.query("SELECT id, title, category, image, description FROM products ORDER BY created_at DESC");
  return result.rows;
};

const writeProductDb = async (product) => {
  const pool = getPool();
  if (!pool) throw new Error("Database not configured.");
  await ensureProductsTable();
  await pool.query(
    "INSERT INTO products (id, title, category, image, description) VALUES ($1, $2, $3, $4, $5)",
    [product.id, product.title, product.category, product.image, product.description]
  );
};

const readProducts = async () => {
  if (DATABASE_URL) {
    return await readProductsDb();
  }
  if (GITHUB_TOKEN && GITHUB_REPOSITORY) {
    const { products } = await loadFromGitHub();
    return products;
  }
  return await readProductsFile();
};

const writeProduct = async (product) => {
  if (DATABASE_URL) {
    return await writeProductDb(product);
  }
  if (GITHUB_TOKEN && GITHUB_REPOSITORY) {
    const { products, sha } = await loadFromGitHub();
    products.unshift(product);
    await saveToGitHub(products, sha);
    return;
  }
  throw new Error("Write operations are not supported in this environment.");
};

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      const products = await readProducts();
      return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(products));
    }

    if (req.method === "POST") {
      const body = await parseBody(req);
      const { password, title, category, image, description } = body;
      if (password !== CMS_PASSWORD) {
        return res.writeHead(401, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Invalid admin password." }));
      }
      if (!title || !category || !image || !description) {
        return res.writeHead(400, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "All fields are required." }));
      }
      const newProduct = {
        id: `${Date.now()}`,
        title,
        category,
        image,
        description,
        createdAt: new Date().toISOString(),
      };
      await writeProduct(newProduct);
      return res.writeHead(201, { "Content-Type": "application/json" }).end(JSON.stringify(newProduct));
    }

    return res.writeHead(405, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Method not allowed." }));
  } catch (error) {
    return res.writeHead(500, { "Content-Type": "application/json" }).end(JSON.stringify({ error: error.message }));
  }
};

export default handler;
