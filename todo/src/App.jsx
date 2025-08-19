import { useState } from "react";
import Item from "./Item";

export default function App() {
  const [items, setItems] = useState([
    { id: 3, name: "apple", done: false },
    { id: 2, name: "egg", done: false },
    { id: 1, name: "bread", done: false },
  ]);

  const add = (name) => {
    const id = items[0].id + 1;
    setItems([{ id, name, done: false }, ...items]);
  };

  return (
    <>
      <h1>Hello React ({items.length})</h1>
      <button onClick={() => add("New Item")}>Add</button>
      <ul>
        {items.map((item) => (
          <Item key={items.id} item={item} />
        ))}
      </ul>
    </>
  );
}
