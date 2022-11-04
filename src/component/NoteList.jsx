import Note from "./Note";
import EditNote from "./EditNote";

export default function noteList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <Note note={note} key={note.id} deleteNote={deleteNote} />
      ))}
      <EditNote handleAddNote={handleAddNote} />
    </div>
  );
}
