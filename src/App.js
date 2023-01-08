import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Todoitem from "./Todoitem";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo/:id" element={<Todoitem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
