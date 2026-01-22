import { defineCollection, z } from "astro:content";

export const collections = {
  people: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      role: z.string(),
      photo: z.string(),
      order: z.number().optional(),
    }),
  }),



  news: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      summary: z.string(),
    }),
  }),
};
