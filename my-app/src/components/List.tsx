import React from "react";
import ItemComponent from "./Item";
import type { Item } from "./CreateForm";


interface Props {
  items: Item[];
  editItem: (item: Item) => void;
  deleteItem: (id: number) => void;
}

const List: React.FC<Props> = ({ items, editItem, deleteItem }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
