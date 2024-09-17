import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css"
interface TaskListProps {
  tasks: TaskItem[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="TaskItem">
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <p>Due: {task.dueDate}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
