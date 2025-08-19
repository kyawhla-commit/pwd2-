export default function Item({ item, del }) {
    return <li>
        {item.name}
        <button onClick={() => del(item.id)}>Delete</button>
        </li>;
  }