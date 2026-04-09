import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collection = {
    blog: blogCollection,
};