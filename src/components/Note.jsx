import React from "react";

function Note(props) {

  const click=()=>{
    props.onClick(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={click} style={{backgroundColor:"white"}}>DELETE</button>
    </div>
  );
}

export default Note;
