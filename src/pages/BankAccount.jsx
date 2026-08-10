import { Routes, Route, useNavigate } from "react-router";
import { useState } from "react";
import BankNav from "../components/BankNav.jsx";
import Register from "./bankaccount/Register.jsx";
import Login from "./bankaccount/Login";
import BtnPill from "../components/BtnPill.jsx";

function BankHome() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="max-w-sm border-2 border-blue-500 rounded-2xl m-4 p-4">
          Welcome to this simple banking simulation app. Please follow the
          instructions below to get started. Obviously no transactions are
          actually made, but this does act as if the account was active
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <BtnPill onClick={() => navigate("/bankaccount/register")}>
            Register
          </BtnPill>
          <BtnPill onClick={() => navigate("/bankaccount/login")}>
            Login
          </BtnPill>
        </div>
      </section>
    </>
  );
}

function BankAccount() {
  const [error, setError] = useState(null);

  return (
    <>
      <BankNav />
      {error !== null && (
        <div className="m-4 p-4 text-red-500 text-center font-bold">
          {error}
        </div>
      )}
      <Routes>
        <Route index element={<BankHome />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default BankAccount;
