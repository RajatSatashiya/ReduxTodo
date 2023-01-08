import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Todoitem() {
  const params = useParams();
  var num = Number(params["id"]);
  var todoitem = useSelector((state) => state.todos);

  todoitem = todoitem.filter((item) => {
    return item.id === num;
  });
  return (
    <>
      <div className="card">
        <div>{todoitem[0].text}</div>
        <div>Status: {todoitem[0].complete ? "Completed" : "Incomplete"}</div>
      </div>
    </>
  );
}

export default Todoitem;
