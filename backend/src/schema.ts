import { pgTable, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const siteSettings = pgTable('site_settings', {
  id: text('id').primaryKey(),
  logo: text('logo'),
  companyName: text('company_name'),
  phone: text('phone'),
  whatsapp: text('whatsapp'),
  email: text('email'),
  address: text('address'),
  hours: text('hours'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const homeContent = pgTable('home_content', {
  id: text('id').primaryKey(),
  heroTitle: text('hero_title'),
  heroSubtitle: text('hero_subtitle'),
  featuredWorks: jsonb('featured_works').$type<Array<{ title: string; img: string; category: string }>>(),
  services: jsonb('services').$type<Array<{ icon: string; title: string; desc: string }>>(),
  testimonials: jsonb('testimonials').$type<Array<{ text: string; name: string }>>(),
});

export const aboutContent = pgTable('about_content', {
  id: text('id').primaryKey(),
  story: text('story'),
  yearsStat: text('years_stat'),
  projectsStat: text('projects_stat'),
  values: jsonb('values').$type<Array<{ title: string; description: string }>>(),
  team: jsonb('team').$type<Array<{ name: string; role: string; img: string }>>(),
});

export const servicesContent = pgTable('services_content', {
  id: text('id').primaryKey(),
  categories: jsonb('categories').$type<Array<{ title: string; items: string[]; img: string }>>(),
  methodology: jsonb('methodology').$type<Array<{ step: string; title: string; desc: string }>>(),
});

export const galleryContent = pgTable('gallery_content', {
  id: text('id').primaryKey(),
  categories: jsonb('categories').$type<Array<{ name: string; images: string[] }>>(),
});

export const contactContent = pgTable('contact_content', {
  id: text('id').primaryKey(),
  details: jsonb('details').$type<Record<string, string>>(),
  faq: jsonb('faq').$type<Array<{ question: string; answer: string }>>(),
});

export const legalContent = pgTable('legal_content', {
  id: text('id').primaryKey(),
  privacyPolicy: text('privacy_policy'),
  termsOfService: text('terms_of_service'),
});
