import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {
  const tasksToDisplay = tasks.map((item) => {
    return item
  })

  return (
    <div className="tasks">
      <ul className="ToDos">
        {tasksToDisplay.map((task) => (
          <Task key={task.id} text={task.text} category={task.category} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
