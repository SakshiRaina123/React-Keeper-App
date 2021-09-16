import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {
  return (
    <div className="note">
      <h1 id="title">{props.title}</h1>
      <p id="content">{props.content}</p>
      <button onClick={() => {props.onDelete(props.id)}}> <DeleteIcon/> </button>
      <button onClick={() => {props.onEdit(props.id, props.content, props.title)}}><EditIcon/></button>
    </div>
  );
}

export default Note;
