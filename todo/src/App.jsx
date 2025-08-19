function Item() {
  return <li>Item One</li>;
}
export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <ul>
        <Item />
        <Item />
        <Item />
      </ul>
    </>
  );
}
