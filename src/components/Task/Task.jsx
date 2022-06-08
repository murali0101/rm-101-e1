import React from "react";

import { useDispatch } from "react-redux";
import { addTaskData1, deleteData } from "../../redux/action";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
// import remove from "../../assets/remove.svg";
const Task = ({ props }) => {
  const dispatch = useDispatch();
  // NOTE: do not delete `data-testid` key value pair
  const { id, text, done, count } = props;
  // console.log(props)
  return (
    <li data-testid="task" className={styles.task}>
      {done ? (
        <input type="checkbox" data-testid="task-checkbox" checked onClick={()=>{dispatch(addTaskData1([false,id]))}} />
      ) : (
        <input type="checkbox" data-testid="task-checkbox" onClick={()=>{dispatch(addTaskData1([true,id]))}} />
      )}
      <div data-testid="task-text" className={done?styles.textLine:null}>{text}</div>
      {/* Counter here */}
      <Counter props={props} />
      <button
        data-testid="task-remove-button"
        onClick={() => {
          dispatch(deleteData(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
