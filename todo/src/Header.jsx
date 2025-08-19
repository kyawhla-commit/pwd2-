import { Toolbar, Container, Typography, AppBar, Badge } from '@mui/material';
export default function Header({count}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm">
          <Badge badgeContent={count} color="error">
            Todo
          </Badge>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
