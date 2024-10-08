import { cn } from '@/utils/cn';
import React from 'react';
import { z } from 'zod';

const FlexSchema = z
  .object({
    children: z.any(),
    direction: z.string(),
    className: z.string(),
  })
  .partial({
    className: true,
  });

type SchemaProps = z.infer<typeof FlexSchema>;

export const Flex = ({
  children,
  direction = 'row',
  className,
}: SchemaProps) => {
  const directions = {
    col: 'flex-col',
    row: 'flex-row',
  }[direction];

  return <div className={cn('flex', directions, className)}>{children}</div>;
};
