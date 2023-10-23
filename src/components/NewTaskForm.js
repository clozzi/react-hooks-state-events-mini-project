import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskName, setNewTaskName] = useState('To Do');
  const [newTaskCategory, setNewTaskCategory] = useState('Code')

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      category: newTaskCategory,
      text: newTaskName,
      key: uuid()      
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setNewTaskCategory(e.target.value)}>
          {categories.slice(1).map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
