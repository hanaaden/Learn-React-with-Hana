import React, { useState, useEffect } from "react";
import "./index.css";

function Create({ currentItem, addItem, updateItem }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.title);
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      updateItem({ ...currentItem, title });
    } else {
      addItem({ title });
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
      />
      <button type="submit">{currentItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
}

export default Create;
