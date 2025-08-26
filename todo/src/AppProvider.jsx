import {createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
});

export default function AppProvider({children}) {
    return <div>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </div>
}