import { z } from 'zod';

export const ItemSchema = z.object({
    id: z.string(),
    todo: z.string(),
    date: z.string(),
});

export type TodoItemSchema = z.infer<typeof ItemSchema>;