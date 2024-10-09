import { Button } from '@/components/atoms/button';
import { Close, Dialog, Title } from '@/components/atoms/dialog';
import { Flex } from '@/components/atoms/flex';
import { Label } from '@/components/atoms/label';
import { useForm, FieldValues } from 'react-hook-form';
import React, { useEffect } from 'react';
import { z } from 'zod';
import fs from 'fs';
import { ItemSchema } from '@/types/todo';

const TodoDialogSchema = z.object({
  open: z.boolean(),
  onClose: z.function(),
  item: ItemSchema,
  onTodoSubmit: z.function().args(z.any()),
});

type SchemaProps = z.infer<typeof TodoDialogSchema>;

export const TodoDialog = ({
  open,
  onClose,
  onTodoSubmit,
  item,
}: SchemaProps) => {
  const { register, handleSubmit, reset, watch } = useForm({
    values: {
      ...item,
    },
  });

  useEffect(() => {
    reset();
  }, [open]);

  const todoValue = watch('todo');
  const isDisabled = !todoValue;
  const isEdit = !!item.id

  return (
    <Dialog
      className="w-[421px] rounded-lg p-4"
      open={open}
      onOpenChange={onClose}>
      <header className="flex justify-between items-center mb-4">
        <Title className="font-bold">{isEdit ? 'Edit Todo' : 'Tambah Todo'}</Title>
        <Close onClick={onClose} />
      </header>

      <form onSubmit={handleSubmit(onTodoSubmit)}>
        <Flex direction="col" className="gap-2">
          <Label color="midnight" className="font-semibold">
            Todo
          </Label>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-midnight shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-midnight hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            {...register('todo')}
          />
        </Flex>

        <Flex className="mt-8 justify-end">
          <Button
            className="p-2 text-sm rounded-md text-white"
            disabled={isDisabled}>
            Simpan
          </Button>
        </Flex>
      </form>
    </Dialog>
  );
};
