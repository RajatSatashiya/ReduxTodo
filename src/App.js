import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Todoitem from "./Todoitem";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <button>
          <Link to="/">Go back</Link>
        </button>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo/:id" element={<Todoitem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
