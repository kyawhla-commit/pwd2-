import { Toolbar, Container, Typography, AppBar, Badge, Button, IconButton } from '@mui/material';

import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from "@mui/icons-material";
export default function Header({count, clear}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm" sx={{ display: "flex"}}>
          <Typography sx={{ flexGrow: 1 }}>
          <Badge badgeContent={count} color="error">
            Todo
          </Badge>
          </Typography>
          <Button onClick={clear} color='inherit'>Clear</Button>
          <IconButton color='inherit'>
            <DarkModeIcon/>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
