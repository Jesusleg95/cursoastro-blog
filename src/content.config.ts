import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";


const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({image}) => z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: image(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};