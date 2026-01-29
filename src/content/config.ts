import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    blogTitle: z.string(), // The main blog/series title
    chapterTitle: z.string(), // Title of this specific chapter
    description: z.string(),
    date: z.date(),
    author: z.string(),
    coverImage: z.string().optional(),
    category: z.string(),
    order: z.number(), // Order of chapter
  }),
});

export const collections = { blog };
