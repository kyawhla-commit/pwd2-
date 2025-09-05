import { Outlet } from "react-router";
import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";
import {
  Container,
} from "@mui/material";

export default function App() {
  return <>
    <Header />
    <AppDrawer />
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Outlet />
    </Container>
  </>
}