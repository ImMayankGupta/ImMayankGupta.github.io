import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

// Shared schema for hub sections (automation / resources / interview)
const sectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDatetime: z.date(),
  updatedDatetime: z.date().optional(),
  tags: z.array(z.string()).default([]),
  externalUrl: z.url().optional(),
  featured: z.boolean().optional(),
  draft: z.boolean().optional(),
});

const automation = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/automation",
  }),
  schema: sectionSchema,
});

const resources = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/resources",
  }),
  schema: sectionSchema,
});

const interview = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/interview",
  }),
  schema: sectionSchema,
});

export const collections = { pages, automation, resources, interview };
