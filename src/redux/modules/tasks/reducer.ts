import { Reducer } from "redux";
import { ITaskState, TasksActionTypes, TaskActionConsts } from "./types";

const initialState: ITaskState = {
  list: [],
};

export const reducer: Reducer<ITaskState, TasksActionTypes> = (
  state = initialState,
  action
): ITaskState => {
  switch (action.type) {
    case TaskActionConsts.Add:
      const task = action.payload + "" + Math.random();
      return {
        ...state,
        list: [...state.list, task],
      };

    default:
      return state;
  }
};
