import { z } from 'zod';

export const ItemSchema = z.object({
    id: z.string(),
    todo: z.string(),
    date: z.string(),
});
export const FieldValue = z.record(z.string());
export const CallbackFunctionSchema = z.function().args(z.string()).returns(z.void());

export type FieldValueScheman = z.infer<typeof FieldValue>;
export type TodoItemSchema = z.infer<typeof ItemSchema>;
export type CallbackFunction = z.infer<typeof CallbackFunctionSchema>;