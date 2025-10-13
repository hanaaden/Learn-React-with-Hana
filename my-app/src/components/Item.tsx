import React from "react";
import type { Item } from "./CreateForm";


interface Props {
  item: Item;
  editItem: (item: Item) => void;
  deleteItem: (id: number) => void;
}

const ItemComponent: React.FC<Props> = ({ item, editItem, deleteItem }) => {
  return (
    <li>
      {item.title}
      <button onClick={() => editItem(item)}>Edit</button>
      <button onClick={() => deleteItem(item.id!)}>Delete</button>
    </li>
  );
};

export default ItemComponent;
