import { CallbackFunction, TodoItemSchema } from '@type/todo';
import { useMutation } from 'react-query';
import { createTodoItem, deleteTodoItem, updateTodoItem } from '@services/todos';

export const useTodo = () => {
  const mutationTodo = useMutation(createTodoItem);
  const mutationUpdateTodo = useMutation(updateTodoItem);
  const mutationDeleteTodo = useMutation(deleteTodoItem);

  const createTodo = (formVal: Pick<TodoItemSchema, 'todo'>, callback: CallbackFunction) => {
    mutationTodo.mutate(formVal, {
      onSuccess: ({ data }) => {
        callback(data.date);
      }
    });
  };

  const updateTodo = (formVal: Omit<TodoItemSchema, 'date'>, callback: CallbackFunction) => {
    mutationUpdateTodo.mutate(formVal, {
      onSuccess: ({ data }) => {
        callback(data.date);
      }
    })
  };

  const deleteTodo = (id: string, callback: CallbackFunction) => {
    mutationDeleteTodo.mutate(id, {
      onSuccess: ({ data }) => {
        callback(data.date);
      }
    });
  };

  return {
    createTodo,
    updateTodo,
    deleteTodo,
    loading: mutationTodo.isLoading || mutationUpdateTodo.isLoading,
  };
};