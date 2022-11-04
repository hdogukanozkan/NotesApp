import React, { useEffect, useState } from "react";
import NoteList from "./component/NoteList";
import "./app.css";
import { nanoid } from "nanoid";

export default function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const addNotes = (not) => {
    const newNote = {
      id: nanoid(),
      text: not,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
    window.localStorage.setItem("Notlar", JSON.stringify(newNotes));
  };

  useEffect(() => {
    if (localStorage.getItem("Notlar")) {
      const notlarimiz = JSON.parse(localStorage.getItem("Notlar"));
      setNotes(notlarimiz);
    }
  }, []);

  const searchBar = (e) => {
    setSearch(e.target.value);
  };

  let filterNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(search.toLowerCase());
  });

  const deleteNote = (note) => {
    const yeniNotlar = notes.filter((notlar) => notlar.id !== note.id);

    setNotes(yeniNotlar);
    window.localStorage.setItem("Notlar", JSON.stringify(yeniNotlar));
  };

  if (darkMode) {
    document.body.style.backgroundColor = "#181A1B";
  } else {
    document.body.style.backgroundColor = "#eee";
  }

  return (
    <div>
      <i
        className={
          darkMode
            ? "fa-regular fa-moon moon moonDark"
            : "fa-regular fa-moon moon"
        }
        onClick={() => setDarkMode(!darkMode)}
      ></i>
      <div className={darkMode ? " container darkmode" : "container"}>
        <input
          type="text"
          onChange={searchBar}
          className="searchbar"
          placeholder="Search..."
        />
        <NoteList
          notes={filterNotes}
          handleAddNote={addNotes}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
