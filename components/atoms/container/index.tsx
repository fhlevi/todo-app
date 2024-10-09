import React from 'react';
import { z } from 'zod';

const ContainerSchema = z.object({
  children: z.any(),
});

type SchemaProps = z.infer<typeof ContainerSchema>;

export const Container = ({ children }: SchemaProps) => {
  return (
    <div className="py-8 h-full w-full">
      <div className="max-w-[421px] mx-auto h-full">{children}</div>
    </div>
  );
};
