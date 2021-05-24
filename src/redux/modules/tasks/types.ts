import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ITaskState {
    list: string[];
}

export enum TaskActionConsts {
    Add = '@@tasks/Add',
}

export type TasksActionTypes = ActionType<typeof actions>