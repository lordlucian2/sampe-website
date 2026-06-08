CREATE TABLE "about_content" (
	"id" text PRIMARY KEY NOT NULL,
	"story" text,
	"years_stat" text,
	"projects_stat" text,
	"values" jsonb,
	"team" jsonb
);
--> statement-breakpoint
CREATE TABLE "contact_content" (
	"id" text PRIMARY KEY NOT NULL,
	"details" jsonb,
	"faq" jsonb
);
--> statement-breakpoint
CREATE TABLE "gallery_content" (
	"id" text PRIMARY KEY NOT NULL,
	"categories" jsonb
);
--> statement-breakpoint
CREATE TABLE "home_content" (
	"id" text PRIMARY KEY NOT NULL,
	"hero_title" text,
	"hero_subtitle" text,
	"featured_works" jsonb,
	"services" jsonb,
	"testimonials" jsonb
);
--> statement-breakpoint
CREATE TABLE "legal_content" (
	"id" text PRIMARY KEY NOT NULL,
	"privacy_policy" text,
	"terms_of_service" text
);
--> statement-breakpoint
CREATE TABLE "services_content" (
	"id" text PRIMARY KEY NOT NULL,
	"categories" jsonb,
	"methodology" jsonb
);
--> statement-breakpoint
CREATE TABLE "site_settings" (
	"id" text PRIMARY KEY NOT NULL,
	"logo" text,
	"company_name" text,
	"phone" text,
	"whatsapp" text,
	"email" text,
	"address" text,
	"hours" text,
	"updated_at" timestamp DEFAULT now()
);
