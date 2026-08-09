import BtnBlue from "../components/BtnBlue.jsx";

export default function ListView({ body, onToggle, onDelete }) {
  return (
    <ul className="flex flex-col gap-2 m-4 p-4 border border-gray-300 rounded">
      {body.map((todo) => (
        <li key={todo.id} className="flex items-center gap-4">
          <div>{todo.id}</div>
          <div
            className="mr-4 text-left"
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </div>
          <div>
            <BtnBlue onClick={() => onDelete(todo.id)}>Delete</BtnBlue>
          </div>
        </li>
      ))}
    </ul>
  );
}
