import { cn } from '@/utils/cn';
import React from 'react';
import { z } from 'zod';

const LabelSchema = z
  .object({
    children: z.any(),
    color: z.string(),
    size: z.string(),
    className: z.string(),
  })
  .partial({
    color: true,
    size: true,
    className: true,
  });

type SchemaProps = z.infer<typeof LabelSchema>;

export const Label = ({
  children,
  color = 'default',
  size = '16px',
  className,
}: SchemaProps) => {
  const colors = {
    primary: 'text-primary-10',
    default: 'text-white',
  }[color];

  return (
    <div
      className={cn(colors, className)}
      style={{
        fontSize: size,
      }}>
      {children}
    </div>
  );
};
