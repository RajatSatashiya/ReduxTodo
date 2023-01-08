import React from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleStatus } from "./Redux/action";
import { Link } from "react-router-dom";

function Todo() {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state);
  const changeStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const displayItems = todolist.todos.map((item, index) => (
    <div key={index} className="todoitem">
      <h3
        onClick={() => changeStatus(item.id)}
        style={{ textDecoration: item.complete ? "line-through" : "none" }}
      >
        {item.text}
      </h3>
      <div>
        <Link to={`/todo/${item.id}`}>More details...</Link>
      </div>
    </div>
  ));
  const [id, setId] = useState(2);

  const todoInputRef = useRef();
  const handleButton = () => {
    dispatch(addTodo(id, todoInputRef.current.value));
    setId((id) => id + 1);
  };
  return (
    <>
      <div>
        <input type="text" name="todo" ref={todoInputRef} />
        <button onClick={handleButton}>Add Item</button>
      </div>

      <div>{displayItems}</div>
    </>
  );
}

export default Todo;
