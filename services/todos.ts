import { TodoItemSchema } from '@/types/todo';
import { HTTPClientNonAuth } from '@config/http';

const prefix = 'todos'

export const getTodos = () => {
    return HTTPClientNonAuth().get(prefix);
};

export const getTodoById = (id: string) => {
    return HTTPClientNonAuth().get(`${prefix}/${id}`);
};

export const createTodoItem = (payload: Pick<TodoItemSchema, 'todo'>) => {
    return HTTPClientNonAuth().post(prefix, payload);
};

export const updateTodoItem = ({ id, todo }: Pick<TodoItemSchema, 'id' | 'todo'>) => {
    return HTTPClientNonAuth().put(`${prefix}/${id}`, { todo });
};

export const deleteTodoItem = (id: string) => {
    return HTTPClientNonAuth().delete(`${prefix}/${id}`);
};