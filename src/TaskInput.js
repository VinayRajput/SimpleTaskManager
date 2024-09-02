const TaskInput = (props) => {
  console.log("TaskInput", props);
  return (
    <>
      <input type="text" ref={props.input} />
      <button onClick={props.addTask}>Add </button>
    </>
  );
};
export default TaskInput;
