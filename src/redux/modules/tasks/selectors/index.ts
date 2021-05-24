import { IRootState } from "Redux/store";

export const getTasks = (state: IRootState) => state.tasks.list;