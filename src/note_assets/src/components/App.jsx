import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NoteArea from './NoteArea';
import Note from './Note';
import { reactNote } from "../../../declarations/keeper";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(existingNotes => {
      return [...existingNotes, newNote];
    })
  };

  function deleteNote(id) {
    setNotes(existingNotes => {
      return existingNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
    <div className="App">
    <Header />
    <NoteArea onAdd={addNote} />
    {notes.map((item, index) => {
      return (
        <Note
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        onDelete={deleteNote}
        />
        );
      })}
      <Footer />
      </div>
      </div>
  );
}

export default App;
