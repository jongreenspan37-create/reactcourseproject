import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import NavBar from "./components/NavBar.jsx";
import ToDoList from "./pages/ToDoList.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
