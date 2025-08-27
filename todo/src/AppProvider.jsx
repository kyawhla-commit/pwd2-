import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo } from "react";

import { useState } from "react";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext)
}

export default function AppProvider({ children }) {
    const [mode, setMode] = useState("dark")

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode
            }
        });
    }, [mode])
    return <div>
        <AppContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    </div>
}