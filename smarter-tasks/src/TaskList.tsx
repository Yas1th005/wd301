
import { TaskItem } from "./types";
import "./TaskCard.css"
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx} className="task-item">
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        className="deleteTaskButton"
        onClick={() => props.deleteTask(idx)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;


