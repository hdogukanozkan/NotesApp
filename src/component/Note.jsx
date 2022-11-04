export default function note({ note, deleteNote }) {
  return (
    <div className="note" key={note.id}>
      <p className="text">{note.text}</p>
      <div className="note-footer">
        <p className="date">{note.date}</p>
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            deleteNote(note);
          }}
        ></i>
      </div>
    </div>
  );
}
