import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({image}) => z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: image(),


    // Relacion
    // author: z.string()
    author: reference('author'),
    
    tags: z.array(z.string()),
  }),
});

const authorCollection = defineCollection({
  type: 'data',
  schema: ({image}) =>
    z.object({
      name: z.string(),
      avatar: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};