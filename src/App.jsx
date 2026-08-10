import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import BankAccount from "./pages/BankAccount.jsx";
import NavBar from "./components/NavBar.jsx";
import ToDoList from "./pages/ToDoList.jsx";
import Calculator from "./pages/Calculator.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/bankaccount" element={<BankAccount />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
