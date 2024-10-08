import { cn } from '@/utils/cn';
import React from 'react';
import { z } from 'zod';

const IconSchema = z
  .object({
    variant: z.enum(['default', 'primary']),
    icon: z.string(),
  })
  .partial({
    variant: true,
  });

type SchemaProps = z.infer<typeof IconSchema>;

export const Icon = ({ variant = 'default', icon }: SchemaProps) => {
  const variants = {
    default: 'text-white',
    primary: 'text-primary-10',
  }[variant];
  
  return <em className={cn(variants, icon)} />;
};
