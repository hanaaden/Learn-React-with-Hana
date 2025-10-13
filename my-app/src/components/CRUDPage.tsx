import React, { useState } from "react";
// Import the component AND the type
import CreateForm, { type Item } from "./CreateForm";
import List from "./List";

const CRUDContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const addItem = (item: Item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (updatedItem: Item) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setCurrentItem(null);
  };

  const editItem = (item: Item) => {
    setCurrentItem(item);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <CreateForm currentItem={currentItem} addItem={addItem} updateItem={updateItem} />
      <List items={items} editItem={editItem} deleteItem={deleteItem} />
    </div>
  );
};

export default CRUDContainer;
