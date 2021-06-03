import useHttp from "../../hooks/use-http";
// import useHttp from '../../hooks/use-http';

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  const sendData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: "https://react-http-9da4e-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      sendData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
