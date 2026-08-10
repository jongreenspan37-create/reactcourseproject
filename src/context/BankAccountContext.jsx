import { createContext, useContext, useState } from "react";

const BankAccountContext = createContext(null);

export function BankAccountProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState(null);

  function login(account) {
    setCurrentAccount(account);
  }

  function logout(account) {
    setCurrentAccount(null);
  }

  return (
    <BankAccountContext.Provider value={{ currentAccount, login, logout }}>
      {children}
    </BankAccountContext.Provider>
  );
}

export function useBankAccount() {
  return useContext(BankAccountContext);
}
