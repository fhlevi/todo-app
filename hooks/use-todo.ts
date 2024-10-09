import { TodoItemSchema } from '@/types/todo';
import { prettyDate } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { v4 } from 'uuid';

const saveToLocalStorage = (payload: Array<TodoItemSchema>) => {
  localStorage.setItem('todo-list', JSON.stringify(payload));
};

export const useTodo = () => {
  const [todoList, setTodoList] = useState<any[]>([]);

  const createTodo = (
    formVal: FieldValues,
    callback: (date: string, items: any[]) => void,
  ) => {
    const arrPayload: Array<TodoItemSchema> = [...todoList];

    const payload = {
      todo: formVal.todo,
      id: v4(),
      date: prettyDate(new Date()),
    };

    arrPayload.push(payload);

    saveToLocalStorage(arrPayload);
    callback(payload.date, arrPayload);
  };

  const updateTodo = (
    formVal: FieldValues,
    callback: (date: string, items: any[]) => void,
  ) => {
    const storedTodoList = localStorage.getItem('todo-list');
    const arrPayload = storedTodoList ? JSON.parse(storedTodoList) : [];
    
    const index = arrPayload.findIndex(
      (item: TodoItemSchema) => item.id === formVal.id,
    );

    if (index !== -1) {
      arrPayload[index].todo = formVal.todo;
      
      saveToLocalStorage(arrPayload);
      callback(arrPayload[index].date, arrPayload);
    }
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev: Array<TodoItemSchema>) => {
      const arrPayload = [...prev];
      const index = arrPayload.findIndex((item) => item.id === id);

      if (index !== -1) {
        arrPayload.splice(index, 1);
        saveToLocalStorage(arrPayload);
      }

      return arrPayload;
    });
  };

  useEffect(() => {
    const todos = localStorage.getItem('todo-list');

    setTodoList(todos ? JSON.parse(todos) : []);
  }, []);

  return {
    createTodo,
    updateTodo,
    todoList,
    setTodoList,
    deleteTodo,
  };
};
