import { useState } from 'react';
import Item from './Item';
import Form from './Form';
import Header from './Header';
import List from './List';

import { Box, Container } from '@mui/material';

export default function App() {
  const [items, setItems] = useState([
    { id: 3, name: 'apple', done: false },
    { id: 2, name: 'egg', done: false },
    { id: 1, name: 'bread', done: false },
  ]);

  const add = (name) => {
    const id = items[0].id + 1;
    setItems([{ id, name, done: false }, ...items]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header count={items.length} />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Form add={add} />
        </Box>

        <List>
          {items.map((item) => (
            <Item key={item.id} del={del} item={item} />
          ))}
        </List>
      </Container>
    </>
  );
}
