'use client';
import { Button } from '@/components/atoms/button';
import { Card } from '@/components/atoms/card';
import { Container } from '@/components/atoms/container';
import { Label } from '@/components/atoms/label';
import { ScrollArea } from '@/components/atoms/scroll-area';
import { Close, Description, Title, Toast } from '@/components/atoms/toast';
import { TodoDialog } from '@/components/molecules/todo-dialog';
import { TodoList } from '@/components/organisms/todo-list';
import { useTodo } from '@/hooks/use-todo';
import { TodoItemSchema } from '@/types/todo';
import { useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';

export default function Home() {
  const [isDialog, setIsDialog] = useState(false);
  const [isSuccess, setIsSucces] = useState(false);
  const [todoItem, setTodoItem] = useState<TodoItemSchema>({
    id: '',
    todo: '',
    date: ''
  });

  const dateRef = useRef<string>();
  const { createTodo, setTodoList, todoList, deleteTodo, updateTodo } = useTodo();

  const isEdit = !!todoItem.id

  const onTodoSubmit = (formVal: FieldValues) => {
    createTodo(
      formVal, 
      (dates: string, items: any[]) => {
        dateRef.current = dates;
        setTodoList(items);
        setIsDialog(false);
        setIsSucces(true);
      }
    );
  };

  const onTodoUpdate = (formVal: FieldValues) => {
    const payload = {
      id: todoItem.id,
      todo: formVal.todo,
      date: todoItem.date
    }

    updateTodo(
      payload,
      (dates: string, items: any[]) => {
        dateRef.current = dates;
        setTodoList(items);
        resetForm();
      }
    );
  };

  const onUpdate = (item: TodoItemSchema) => setTodoItem(item)
  const onDelete = (id: string) => deleteTodo(id)
  const onCloseToast = () => setIsSucces(false);

  const resetForm = () => setTodoItem({
    id: '',
    todo: '',
    date: ''
  })

  return (
    <Container>
      <Card className="rounded-2xl py-11 h-full px-6 text-white relative">
        <Label size="28px">To Do List</Label>

        <ScrollArea className="pt-7 h-full overflow-y-auto">
          <TodoList
            items={todoList}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </ScrollArea>

        <Button
          position="absolute"
          height="70px"
          width="70px"
          className="rounded-full bottom-16 right-6"
          onClick={() => setIsDialog(true)}>
          <em className="fa-solid fa-plus text-4xl"></em>
        </Button>
      </Card>

      <TodoDialog
        open={isDialog || isEdit}
        item={todoItem}
        onTodoSubmit={isEdit ? onTodoUpdate : onTodoSubmit}
        onClose={() => isEdit ? resetForm() : setIsDialog(false)}
      />

      <Toast open={isSuccess} onOpenChange={onCloseToast}>
        <Title className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title] text-primary-10">
          Todo: Submitted
        </Title>
        <Description asChild>
          <time
            className="m-0 text-[13px] leading-[1.3] text-slate11 [grid-area:_description] text-white"
            dateTime={dateRef.current}>
            {dateRef.current}
          </time>
        </Description>
        <Close onClick={onCloseToast} altText="close" asChild />
      </Toast>
    </Container>
  );
}
