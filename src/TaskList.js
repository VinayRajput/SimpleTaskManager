const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.length ? (
        tasks.map((item) => <li>{item}</li>)
      ) : (
        <li>Add a task</li>
      )}
    </>
  );
};
export default TaskList;
