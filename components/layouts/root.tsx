import React from 'react';
import { z } from 'zod';

const RootSchema = z.object({
  children: z.any(),
});

type SchemaProps = z.infer<typeof RootSchema>;

export const Root = (props: SchemaProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
