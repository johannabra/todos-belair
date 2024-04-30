import React from "react";
import TodoList from "../components/TodoList";

const Todos = () => {
  return (
    <main>
      <div className="main-container-todo">
        <h1>Todos</h1>
        <div className="container-todo">
          <TodoList />
        </div>
      </div>
    </main>
  );
};

export default Todos;
