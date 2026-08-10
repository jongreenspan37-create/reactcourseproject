import { useState } from "react";
import { useNavigate } from "react-router";
import { Account } from "../../models/Account";
import { hashPassword } from "../../utils/hashPassword";
import { useBankAccount } from "../../context/BankAccountContext";
import Field from "../../components/Field.jsx";
import BtnBlue from "../../components/BtnBlue.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useBankAccount();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const PASSWORD_PATTERN =
    "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}";
  const PASSWORD_TITLE =
    "Password must be at least 8 characters long and include at least one " +
    "uppercase letter, one lowercase letter, one number, and one special character.";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const accounts = JSON.parse(localStorage.getItem("bankAccounts") || "[]");
    const matched = accounts.find((a) => a.email === form.email);

    if (!matched) {
      setError("Incorrect Details");
      return;
    }

    const hashedPassword = await hashPassword(form.password);
    if (matched.password !== hashedPassword) {
      setError("Incorrect Details");
      return;
    }

    const account = new Account(
      matched.title,
      matched.firstName,
      matched.lastName,
      matched.email,
      matched.password,
      matched.accountNo,
      matched.balance,
      matched.transactionHistory,
    );

    login(account);
    navigate("/bankaccount/accounts");
  }

  return (
    <section className="m-4 flex flex-col justify-center items-center gap-4 ">
      <h2 className="text-xl font-bold text-slate-700">Login Details</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm md:min-w-2xl rounded-lg border border-solid-2 border-blue-500 grid grid-cols-1 items-center 
                  md:grid-cols-[1fr_2fr] gap-4 p-4"
      >
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <Field
          label="Password"
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          pattern={PASSWORD_PATTERN}
          title={PASSWORD_TITLE}
          autoComplete="new-password"
        />

        <BtnBlue type="submit">Submit</BtnBlue>
      </form>
    </section>
  );
}
