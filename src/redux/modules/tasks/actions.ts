import { action } from "typesafe-actions";
import { TaskActionConsts } from "./types";

export const add = (data: string) => action(TaskActionConsts.Add, data);