function Item(props) {
  return <li>
    {props.name} ({props.value})
  </li>;
}
export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <ul>
        <Item name="Apple" value="123"/>
        <Item  name="Egg" value="333"/>
        <Item name="Bread" value="222"/>
      </ul>
    </>
  );
}
