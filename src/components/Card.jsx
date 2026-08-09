import BtnBlue from "./BtnBlue.jsx";

export default function Card({ body, onAction, btnWord }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {body.map((todo) => (
        <div key={todo.id} className="rounded-xl border border-slate-700  p-6">
          <h2 className="text-xl font-semibold text-slate-700">{todo.id}</h2>
          <p className="mt-1 text-sm text-slate-600">{todo.title}</p>
          {onAction && (
            <BtnBlue onClick={() => onAction(todo.id)}>{btnWord}</BtnBlue>
          )}
        </div>
      ))}
    </section>
  );
}
