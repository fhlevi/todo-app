import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { z } from 'zod';

const ClassNameSchema = z.array(z.unknown());

type SchemaProps = z.infer<typeof ClassNameSchema>

export function cn(...inputs: SchemaProps) {
    return twMerge(clsx(inputs));
}