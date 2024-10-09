'use client';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';
import { z } from 'zod';

const ButtonSchema = z
  .object({
    children: z.any(),
    color: z.string(),
    position: z.enum(['absolute', 'relative', 'fixed', 'sticky']),
    height: z.string(),
    width: z.string(),
    className: z.string(),
  })
  .partial({
    className: true,
    position: true,
    height: true,
    width: true,
    color: true,
  });

type SchemaProps = z.infer<typeof ButtonSchema> & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  color = 'default',
  position,
  width,
  height,
  ...props
}: SchemaProps) => {
  const colors = {
    default: 'bg-primary-10',
  }[color];

  return (
    <button
      className={cn(colors, position, className, 'disabled:bg-slate-300 disabled:text-gray-400')}
      style={{
        width,
        height,
      }}
      {...props}>
      {children}
    </button>
  );
};
