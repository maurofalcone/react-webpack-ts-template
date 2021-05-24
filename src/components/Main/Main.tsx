import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "Redux/store";
import { add } from "Redux/modules/tasks/actions";
import { Dispatch } from "redux";
import { getSortedList } from "Redux/modules/tasks/selectors/getSortedList";
import { TasksActionTypes } from "Redux/modules/tasks/types";

const mapTasks = (data: IRootState["tasks"]["list"]) =>
  data.map((t, idx) => <li key={idx}>{t}</li>);

const Main: React.FC = () => {
  const dispatch = useDispatch<Dispatch<TasksActionTypes>>();
  const sortedList =
    useSelector<IRootState, IRootState["tasks"]["list"]>(getSortedList);
  return (
    <div>
      <button onClick={() => dispatch(add("My Task"))}>Add</button>
      <ul>{mapTasks(sortedList)}</ul>
    </div>
  );
};

export default Main;
