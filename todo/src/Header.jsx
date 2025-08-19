import { Toolbar, Container, Typography, AppBar, Badge, Button } from '@mui/material';
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
          <Button onClick={clear} color='white'>Clear</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
