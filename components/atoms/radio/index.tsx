import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { z } from 'zod';
import * as Primitive from '@radix-ui/react-radio-group';
import { cn } from '@/utils/cn';

const DialogSchema = z
  .object({
    children: z.any(),
    className: z.string(),
    defaultValue: z.string()
  })
  .partial({
    className: true,
  });

type SchemaProps = z.infer<typeof DialogSchema>;

export const Radio = forwardRef<
  ElementRef<typeof Primitive.Item>,
  ComponentPropsWithoutRef<typeof Primitive.Item>
>(({ className, ...props }, ref) => (
  <Primitive.Item
    ref={ref}
    className={cn(
      className,
      'size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3',
    )}
    {...props}>
    <Primitive.Indicator className="relative box-border flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
  </Primitive.Item>
));

Radio.displayName = 'Radio';

export const RadioGroup = ({ children, className, defaultValue }: SchemaProps) => {
  return <Primitive.Root className={cn(className)} defaultValue={defaultValue}>{children}</Primitive.Root>;
};
