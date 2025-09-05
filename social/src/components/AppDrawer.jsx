import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import {
    Home as HomeIcon,
    AccountCircle as ProfileIcon,
    ExitToApp as LogoutIcon,
    Login as LoginIcon,
    PersonAdd as RegisterIcon

} from "@mui/icons-material";
import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
export default function AppDrawer() {
    const { openDrawer, setOpenDrawer, auth, setAuth } = useApp(false)

    const Navigate = useNavigate();

    return <Drawer
        open={openDrawer}
        anchor="left"
        onClose={() => { setOpenDrawer(false) }}
        onClick={() => { setOpenDrawer(false) }}
    >
        <Box sx={{ width: 250, height: 150, bgcolor: "gray" }}>
        </Box>
        <List>
            {auth && (
                <>
                    <ListItem>
                        <ListItemButton onClick={() => Navigate("/")}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton onClick={() => Navigate("/profile")}>
                            <ListItemIcon>
                                <ProfileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                     <ListItem>
                        <ListItemButton onClick={() => {
                            setAuth(undefined)
                            Navigate("/")
                        }}>
                            <ListItemIcon >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </>
            )}
            {!auth && (
                <>
                    <ListItem>
                        <ListItemButton onClick={() => Navigate("/login")}>
                            <ListItemIcon >
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem>
                        <ListItemButton onClick={() => Navigate("/register")}>
                            <ListItemIcon>
                                <RegisterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItemButton>
                    </ListItem>
                </>
            )}

        </List>
    </Drawer>

    // 52minute
}