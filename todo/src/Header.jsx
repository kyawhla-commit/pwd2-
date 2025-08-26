import { Toolbar, Container, Typography, AppBar, Badge, Button, IconButton } from '@mui/material';

import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from "@mui/icons-material";
import AppProvider from './AppProvider';
import { AppContext } from './AppProvider';
import { useContext } from 'react';

export default function Header({ count, clear }) {
  const { mode, setMode } = useContext(AppContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm" sx={{ display: "flex" }}>
          <Typography sx={{ flexGrow: 1 }}>
            <Badge badgeContent={count} color="error">
              Todo
            </Badge>
          </Typography>
          <Button onClick={clear} color='inherit'>Clear</Button>
          {mode === "dark" ? (
            <IconButton color='inherit' onClick={() => {setMode("light")}}>
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton color='inherit' onClick={() => {setMode("dark")}}>
              <DarkModeIcon />
            </IconButton>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
