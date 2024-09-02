import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const taskInput = useRef();
  const addTask = () => {
    console.log(taskInput.current.value);
    dispatch({ type: "ADD", payload: taskInput.current.value });
  };
  return (
    <>
      <h1>Task Manager</h1>
      <>
        Add a task:
        <TaskInput input={taskInput} addTask={addTask} />
      </>
      <ol>
        <TaskList tasks={tasks} />
      </ol>
    </>
  );
};

export default TaskManager;
