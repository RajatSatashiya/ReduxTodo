import React from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/action";

function Todo() {
  const todolist = useSelector((state) => state);

  const displayItems = todolist.todos.map((item, index) => (
    <div key={index}>{item.text}</div>
  ));
  const dispatch = useDispatch();
  const [id, setId] = useState(2);

  const todoInputRef = useRef();
  const handleButton = () => {
    dispatch(addTodo(id, todoInputRef.current.value));
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
