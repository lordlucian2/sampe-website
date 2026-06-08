import express from 'express';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

app.post('/api/admin/login', async (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid password' });
});

app.get('/api/cms', async (req, res) => {
  const settings = await db.query.siteSettings.findFirst();
  const home = await db.query.homeContent.findFirst();
  const about = await db.query.aboutContent.findFirst();
  const services = await db.query.servicesContent.findFirst();
  const gallery = await db.query.galleryContent.findFirst();
  const contact = await db.query.contactContent.findFirst();
  const legal = await db.query.legalContent.findFirst();
  res.json({ settings, home, about, services, gallery, contact, legal });
});

app.post('/api/cms/:section', authenticate, async (req, res) => {
  const { section } = req.params;
  const data = req.body;
  const tableMap: any = {
    settings: schema.siteSettings,
    home: schema.homeContent,
    about: schema.aboutContent,
    services: schema.servicesContent,
    gallery: schema.galleryContent,
    contact: schema.contactContent,
    legal: schema.legalContent,
  };
  const table = tableMap[section];
  if (!table) return res.status(400).json({ error: 'Invalid section' });
  await db.insert(table).values({ id: 'main', ...data }).onConflictDoUpdate({ target: table.id, set: data });
  res.json({ success: true });
});

app.listen(process.env.PORT || 5000, () => console.log(`Backend running on port ${process.env.PORT || 5000}`));
