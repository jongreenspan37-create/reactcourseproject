import { useState, useEffect } from "react";
import BtnPill from "../components/BtnPill.jsx";
import BtnBlue from "../components/BtnBlue.jsx";
import Table from "../components/Table.jsx";
import Card from "../components/Card.jsx";
import ListView from "../components/ListView.jsx";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const [view, setView] = useState("list"); // default view is "ul"
  const thead = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
  ];

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  function handleAddTodo() {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setText("");
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <>
      <div className="flex m-4 p-4 border border-gray-300 rounded">
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <BtnPill onClick={handleAddTodo}>Add</BtnPill>
        <div className="ml-4 flex gap-4">
          {view !== "card" && (
            <BtnPill onClick={() => setView("card")}>Card View</BtnPill>
          )}
          {view !== "table" && (
            <BtnPill onClick={() => setView("table")}>Table View</BtnPill>
          )}
          {view !== "list" && (
            <BtnPill onClick={() => setView("list")}>List View</BtnPill>
          )}
        </div>
      </div>
      <div className="ml-4 text-xl">This is the {view} view</div>
      <div className="m-4 p-4 border border-gray-300 rounded">
        {view === "list" && (
          <ListView body={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
        {view === "table" && (
          <Table head={thead} data={todos} onAction={deleteTodo} />
        )}
        {view === "card" && (
          <Card body={todos} onAction={deleteTodo} btnWord="Delete" />
        )}
      </div>
    </>
  );
}
