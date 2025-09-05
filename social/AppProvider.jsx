import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { useState } from "react";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext)
}

export default function AppProvider({ children }) {
    const [mode, setMode] = useState("dark");
    const [openDrawer, setOpenDrawer ] = useState(false)

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode
            }
        });
    }, [mode])
    return <div>
        <AppContext.Provider value={{ mode, setMode, openDrawer, setOpenDrawer }}>
          <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
          </QueryClientProvider>
        </AppContext.Provider>
    </div>
}