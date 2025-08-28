import { useState } from 'react';
import Item from './Item';
import Form from './Form';
import Header from './Header';
import List from './List';

import { Box, Container, Divider } from '@mui/material';
import { useEffect } from 'react';

const api = "http://localhost:8800/tasks"

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(async res => {
        const data = await res.json();
        setItems(data);
      })
  })

  const add = (name) => {
    const id = items[0] ? items[0].id + 1 : 1;
    setItems([{ id, name, done: false }, ...items]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toogle = id => {
    setItems(items.map(item => {
      if (item.id == id) item.done = !item.done
      return item;
    }))
  }

  const clear = () => {
    setItems(items.filter(item => !item.done))
  }

  return (
    <>
      <Header count={items.filter(item => !item.done).length} clear={clear} />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Form add={add} />
        </Box>

        <List>
          {items.filter(item => !item.done).map((item) => (
            <Item key={item.id} toogle={toogle} del={del} item={item} />
          ))}
        </List>
        <Divider />
        <List>
          {items.filter(item => item.done).map((item) => (
            <Item key={item.id} toogle={toogle} del={del} item={item} />
          ))}
        </List>
      </Container>
    </>
  );
}
