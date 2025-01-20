import { z } from 'zod';

export const BlogSchemaZod = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .max(200, 'Title must be at most 200 characters long'),
  content: z.string().min(1, 'Content cannot be empty'),
});

export const BlogSchemaUpdateZod = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .max(200, 'Title must be at most 200 characters long')
    .optional(),
  content: z.string().min(1, 'Content cannot be empty').optional(),
});
