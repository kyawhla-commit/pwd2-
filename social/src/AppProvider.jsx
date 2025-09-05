import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";

const queryClient = new QueryClient();

import { useState } from "react";
import Profile from "./pages/Profile";
import Register from "./pages/register";
import View from "./pages/View";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext)
}

export default function AppProvider({ children }) {
    const [mode, setMode] = useState("dark");
    const [openDrawer, setOpenDrawer] = useState(false)
    const [auth, setAuth ] = useState();

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode
            }
        });
    }, [mode])

    const router =  createBrowserRouter([
        {
            path: "/",
            Component: App,
            children: [
                {
                    path: "/",
                    Component: Home,
                },
                {
                    path: "/login",
                    Component: Login,
                },
                {
                    path: "/profile",
                    Component: Profile,
                },
                {   path: "/register",
                    Component: Register,
                },
                {
                    path: "/view",
                    Component: View,
                },
            ]
        }
    ])
    return <div>
        <AppContext.Provider value={{ mode, setMode, openDrawer, setOpenDrawer, auth, setAuth }}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router}/>
                    <CssBaseline/>
                </ThemeProvider>
            </QueryClientProvider>
        </AppContext.Provider>
    </div>
}