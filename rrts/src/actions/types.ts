import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO'
}

export type Action = FetchTodosAction | DeleteTodoAction;

