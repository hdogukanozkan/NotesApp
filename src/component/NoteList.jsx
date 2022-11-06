import Note from "./Note";
import EditNote from "./EditNote";
import { useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function NoteList({ notes, handleAddNote, deleteNote }) {
  const [parent] = useAutoAnimate();
  return (
    <div className="NoteList" ref={parent}>
      {notes.map((note) => (
        <Note note={note} key={note.id} deleteNote={deleteNote} />
      ))}
      <EditNote handleAddNote={handleAddNote} />
    </div>
  );
}
