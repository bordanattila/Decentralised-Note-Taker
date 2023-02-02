import React, { useState } from "react";
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function NoteArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(previousNote => {
            return {
                ...previousNote, 
                [name]: value
            };
        });
    };

    function submitNote(event) {
props.onAdd(note);
setNote({
    title: "",
    content: "",
});
event.preventDefault();
    };

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
          <form className="create-note">
            {isExpanded && (
              <input autoFocus
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
              />
            )}
    
            <textarea
              name="content"
              onClick={expand}
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      );
};

export default NoteArea;