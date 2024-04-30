import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        text: "Exempel avklarad todo",
        completed: true,
      },
      {
        id: 2,
        text: "Exempel ogjord todo",
        completed: false,
      },
    ]
  );

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const taskMessage = (
    <div className="carlton-container">
      <h2>
        "Yo, yo, yo! Big ups to you, my friend! You've conquered those tasks
        like a true Fresh Prince of Bel-Air! Keep hustlin' and stay fresh!
      </h2>
      <iframe
        src="https://gifer.com/embed/AIQC"
        width="150"
        height="300"
        frameBorder="0"
        allowFullScreen></iframe>
    </div>
  );

  return (
    <div className="todo-list">
      <div className="input-todo">
        {" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button className="input-button" onClick={() => addTask(text)}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <div>{taskMessage}</div>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))
      )}
    </div>
  );
};
export default TodoList;
