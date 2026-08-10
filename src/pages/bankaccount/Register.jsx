import { useState } from "react";
import { useNavigate } from "react-router";
import { Account } from "../../models/Account";
import { hashPassword } from "../../utils/hashPassword";
import BtnBlue from "../../components/BtnBlue";
import Field from "../../components/Field";

const TITLE_OPTIONS = [
  { value: "", label: "Select an Option", disabled: true },
  { value: "Mr", label: "Mr" },
  { value: "Ms", label: "Ms" },
  { value: "Mrs", label: "Mrs" },
  { value: "Dr", label: "Dr" },
  { value: "Other", label: "Other" },
];

const PASSWORD_PATTERN = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}";
const PASSWORD_TITLE =
  "Password must be at least 8 characters long and include at least one " +
  "uppercase letter, one lowercase letter, one number, and one special character.";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const accounts = JSON.parse(localStorage.getItem("bankAccounts") || "[]");
    if (accounts.some((a) => a.email === form.email)) {
      setError("An account with this email already exists.");
      return;
    }

    const hashedPassword = await hashPassword(form.password);
    const accountNo = Math.floor(Math.random() * 1000000000);

    const newAccount = new Account(
      form.title,
      form.firstName,
      form.lastName,
      form.email,
      hashedPassword,
      accountNo,
      0,
      [],
    );

    localStorage.setItem(
      "bankAccounts",
      JSON.stringify([...accounts, newAccount]),
    );

    navigate("/bankaccount/login");
  }

  return (
    <section className="m-4 flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl font-bold text-slate-700">Register Details</h2>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="max-w-sm md:min-w-2xl rounded-lg
                grid grid-cols-1 items-center md:grid-cols-[1fr_2fr] gap-4 p-4"
      >
        <Field
          label="Title"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          options={TITLE_OPTIONS}
          required
        />

        <Field
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={handleChange}
          required
          autoComplete="given-name"
        />

        <Field
          label="Second Name"
          id="lastName"
          name="lastName"
          type="text"
          value={form.lastName}
          onChange={handleChange}
          required
          autoComplete="family-name"
        />

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
