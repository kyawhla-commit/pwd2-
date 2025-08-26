import { createTheme, ThemeProvider } from "@mui/material";
import { createContext } from "react";

import { useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [mode, setMode] = useState("dark")

    const theme = createTheme({
        palette: {
            mode
        }
    });
    return <div>
        <AppContext.Provider value={{ mode, setMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    </div>
}