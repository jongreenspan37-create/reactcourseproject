import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="bg-slate-800 border-b border-slate-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-bold text-xl">
              My App
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/calculator"
              className="text-slate-400 hover:text-white"
            >
              Calculator
            </NavLink>
            <NavLink to="/todos" className="text-slate-400 hover:text-white">
              ToDo List
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
