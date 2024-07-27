import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NotesForm from './NotesForm';
import Pagination from './Pagination';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage =10;

useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
}, []);

useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);

const handleAddNote = (note) => {
  const newNotes = [...notes];
  if (currentNoteIndex !== null) {
      newNotes[currentNoteIndex] = note;
  } else {
      newNotes.push(note);
  }
  setNotes(newNotes);
  setCurrentNoteIndex(null);
};

const handleEditNote = (index) => {
  setCurrentNoteIndex(index);
};

const handleDeleteNote = (index) => {
  const newNotes = notes.filter((_, i) => i !== index);
  setNotes(newNotes);
};

const paginateNotes = () => {
  const start = (currentPage - 1) * notesPerPage;
  return notes.slice(start, start + notesPerPage);
};

const totalPages = Math.ceil(notes.length / notesPerPage);

  return (


    <div className="App">
      <header>
        <p>Note Taking App</p>
      </header>
      <NotesForm onSave={handleAddNote}
                 currentNote={currentNoteIndex !== null ? notes[currentNoteIndex] : null}/>
      <NoteList
        notes={paginateNotes()}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
      <Pagination
        notes={notes}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
