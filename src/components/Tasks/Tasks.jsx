import React from "react";
import styles from "./tasks.module.css";
import data from "../../data/tasks.json";
import Task from "../Task/Task";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((ele, ind) => (
          <Task key={ele.id} />
        ))}
      </ul>
      {data.length==0?<div data-testid="tasks-empty" className={styles.empty} >
        {/* Show when No Tasks are present */}
        Please Add Some Thing
      </div>:null}
    </>
  );
};

export default Tasks;
