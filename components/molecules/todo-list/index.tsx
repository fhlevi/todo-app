import { Budge } from '@/components/atoms/budge';
import { Card } from '@/components/atoms/card';
import { Flex } from '@/components/atoms/flex';
import { Icon } from '@/components/atoms/icon';
import { Label } from '@/components/atoms/label';
import React from 'react';
import { z } from 'zod';

const TodoListSchema = z
  .object({
    date: z.string(),
    items: z.array(
      z.object({
        value: z.string(),
      }),
    ),
    className: z.string(),
  })
  .partial({
    items: true,
    className: true,
  });

type SchemaProps = z.infer<typeof TodoListSchema>;

export const TodoList = ({ date, items }: SchemaProps) => {
  return (
    <Flex direction="col" className="gap-4">
      <Label size="16px" color="primary">
        {date}
      </Label>

      <Card height="94px" variant="primary" className="rounded-lg p-4">
        <Flex direction="row" className="gap-4 justify-between h-full">
          <Flex direction="col" className="w-full">
            <Label size="18px" color="primary" className="mb-2">
                Buy groceries
            </Label>
            <Budge width="54px">
                Medium
            </Budge>
          </Flex>
          <Flex direction="row" className="w-14 gap-4 items-center">
            <Icon icon="fa-solid fa-pen" variant="primary" />
            <Icon icon="fa-solid fa-trash" variant="primary" />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
