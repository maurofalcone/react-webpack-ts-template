import { IRootState } from "Redux/store";
import { createSelector } from "reselect";
import { getTasks } from "./";

export const getSortedList = createSelector(
  getTasks,
  (tasks): IRootState["tasks"]["list"] => {
    if (tasks.length) {
      return tasks.sort();
    }
    return [];
  }
);
