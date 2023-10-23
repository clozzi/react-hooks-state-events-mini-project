import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task])
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All")   return true;
    if (selectedCategory !== "All")   return task.category === selectedCategory;
    return task.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
