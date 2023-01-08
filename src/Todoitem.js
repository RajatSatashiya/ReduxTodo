import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Todoitem() {
  const params = useParams();
  var num = Number(params["id"]);
  const todoitem = useSelector((state) => state.todos[num - 1]);

  return (
    <>
      <div className="card">
        <div>{todoitem.text}</div>
        <div>Status: {todoitem.complete ? "Completed" : "Incomplete"}</div>
      </div>
    </>
  );
}

export default Todoitem;
