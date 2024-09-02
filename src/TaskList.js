const TaskList = ({ tasks }) => {
  console.log("TaskList", tasks);
  return (
    <>
      {tasks.length ? tasks.map((item) => <li>{item}</li>) : <li>Task name</li>}
    </>
  );
};
export default TaskList;
