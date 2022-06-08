import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
// import remove from "../../assets/remove.svg";
const Task = ({ props }) => {
  // NOTE: do not delete `data-testid` key value pair
  const { id, text, done, count } = props;
  // console.log(props)
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{text}</div>
      {/* Counter here */}
      <Counter props={props}/>
      <button data-testid="task-remove-button">Delete</button>
    </li>
  );
};

export default Task;
