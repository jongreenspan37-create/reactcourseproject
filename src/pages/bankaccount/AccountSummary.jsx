import { Link } from "react-router";
import { useBankAccount } from "../../context/BankAccountContext";
import { useState } from "react";
import { Account } from "../../models/Account";
import Field from "../../components/Field";
import BtnPill from "../../components/BtnPill";
import Table from "../../components/Table";

export default function AccountSummary() {
  const { currentAccount, login } = useBankAccount();
  const [amount, setAmount] = useState("");
  const [txError, setTxError] = useState("");

  const TRANSACTION_COLUMNS = [
    { key: "date", label: "Date" },
    { key: "type", label: "Type" },
    { key: "amount", label: "Amount" },
  ];

  if (!currentAccount) {
    return (
      <section className="m-4 p-4 text-center">
        <p>You need to log in to view your account.</p>
        <Link to="/bankaccount/login" className="text-blue-500 font-bold">
          Go to Login
        </Link>
      </section>
    );
  }

  function handleTransaction(type) {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      setTxError("Please enter a valid amount.");
      return;
    }

    const updated = new Account(
      currentAccount.title,
      currentAccount.firstName,
      currentAccount.lastName,
      currentAccount.email,
      currentAccount.password,
      currentAccount.accountNo,
      currentAccount.balance,
      [...currentAccount.transactionHistory],
    );

    if (type === "withdraw") {
      const success = updated.withdraw(value);
      if (success === false) {
        setTxError("Insufficient funds for this transaction.");
        return;
      }
    } else {
      updated.deposit(value);
    }

    setTxError("");
    setAmount("");

    const accounts = JSON.parse(localStorage.getItem("bankAccounts") || "[]");
    const updatedAccounts = accounts.map((a) =>
      a.email === updated.email ? updated : a,
    );
    localStorage.setItem("bankAccounts", JSON.stringify(updatedAccounts));

    login(updated);
  }

  return (
    <section className="m-4">
      <div className="flex flex-col-reverse md:flex-row items-center border-t-2 border-b-2 border-blue-500 p-4 gap-4">
        <div className="flex flex-1 gap-4">
          <div>
            Name: {currentAccount.title} {currentAccount.firstName}{" "}
            {currentAccount.lastName}
          </div>
          <div>Account No: {currentAccount.accountNo}</div>
          <div>Balance: £{currentAccount.getBalance().toFixed(2)}</div>
        </div>
      </div>
      {txError && <p className="text-red-500 font-bold">{txError}</p>}

      <div className="flex items-center gap-2 mt-4">
        <Field
          label="Amount"
          id="amount"
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to withdraw/deposit"
        />
        <BtnPill type="button" onClick={() => handleTransaction("withdraw")}>
          Withdraw
        </BtnPill>
        <BtnPill type="button" onClick={() => handleTransaction("deposit")}>
          Deposit
        </BtnPill>
      </div>
      <div className="mt-4">
        <Table
          head={TRANSACTION_COLUMNS}
          data={currentAccount.getTransactionHistory()}
        />
      </div>
    </section>
  );
}
