import React, { useState } from "react";

export default function EditNote({ handleAddNote }) {
  const [text, setText] = useState();

  const HandleChange = (e) => {
    setText(e.target.value);
  };

  const handlePush = (e) => {
    e.preventDefault();

    if (text.length < 250) {
      handleAddNote(text);
      setText("");
    } else {
      alert("Kardeş harf sınırı 250'dir. ");
    }
  };

  return (
    <div className="note edit">
      <form>
        <textarea
          placeholder="Enter to text message..."
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={HandleChange}
          value={text}
        ></textarea>
        <div className="note-footer">
          <p className="date">{text ? 250 - text.length : 250} Remaning</p>
          <input
            type="submit"
            onClick={handlePush}
            className="EditBtn"
            value={"Save"}
          />
        </div>
      </form>
    </div>
  );
}
