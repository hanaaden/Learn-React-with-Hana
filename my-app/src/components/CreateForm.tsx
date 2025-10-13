import React, { useState, useEffect } from "react";

export interface Item {
  id?: number;
  title: string;
}

interface Props {
  currentItem?: Item | null;
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
}

const CreateForm: React.FC<Props> = ({ currentItem, addItem, updateItem }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentItem) setTitle(currentItem.title);
  }, [currentItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentItem) updateItem({ ...currentItem, title });
    else addItem({ title });
    setTitle("");
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
      <button type="submit">{currentItem ? "Update" : "Add"} Item</button>
    </form>
  );
};

export default CreateForm;
