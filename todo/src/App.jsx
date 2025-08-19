function Item({ item }) {
  return <li>{item.name}</li>;
}
export default function App() {
  const data = [
    { name: "apple", done: false },
    { name: "egg", done: false },
    { name: "bread", done: false },
  ];
  return (
    <>
      <h1>Hello React</h1>
      <ul>
        {data.map(item => {
          return <Item item={item} />;
        })}
      </ul>
    </>
  );
}
