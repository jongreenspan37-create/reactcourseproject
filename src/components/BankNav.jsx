import { NavLink } from "react-router";

export default function BankNav() {
  return (
    <nav className="my-4 pb-4 border-b-2 border-blue-500">
      <div className="flex items-center justify-center gap-4">
        <NavLink to="/bankaccount" className="text-blue-500 font-bold text-xl">
          Home
        </NavLink>

        <NavLink
          to="/bankaccount/register"
          className="text-blue-500 font-bold text-xl"
        >
          Register
        </NavLink>

        <NavLink
          to="/bankaccount/login"
          className="text-blue-500 font-bold text-xl"
        >
          Login
        </NavLink>

        <NavLink
          to="/bankaccount/accounts"
          className="text-blue-500 font-bold text-xl"
        >
          Accounts
        </NavLink>
      </div>
    </nav>
  );
}
