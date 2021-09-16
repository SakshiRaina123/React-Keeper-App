import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom } from "@material-ui/core";
import { Fab } from "@material-ui/core";
function CreateArea(p) {
  const [edit, setEdit] = React.useState(false);

  function handleClick() {
    setEdit(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <input
          name="title"
          onChange={p.handleChange}
          placeholder="Title"
          value={p.state.title}
          style={{ display: edit ? "block" : "none" }}
        />
        <textarea
          name="content"
          onChange={p.handleChange}
          placeholder="Take a note..."
          onClick={handleClick}
          rows={edit ? "3" : "1"}
          value={p.state.content}
        />

        <Zoom in={edit}>
          <Fab
            onClick={() => {
              p.onClick(p.state);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
