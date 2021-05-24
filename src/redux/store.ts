// tslint:disable-next-line: no-su
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import { reducer as tasksReducer } from "Redux/modules/tasks/reducer";

// Types
import { TasksActionTypes, ITaskState } from "Redux/modules/tasks/types";

export type RootAction = TasksActionTypes;

export interface IRootState {
  tasks: ITaskState;
}

// Create Redux Store
export const configureStore = () => {
  const rootReducers = combineReducers<IRootState>({
    tasks: tasksReducer,
  });

  const middleware = [thunk];

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const reduxStore = createStore(rootReducers, enhancers);

  return reduxStore;
};

export const store = configureStore();
