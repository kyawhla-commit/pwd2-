import {
    Box,
    Button,
    OutlinedInput,
    Typography,
} from "@mui/material";
export default function Login() {
    return <Box>
        <Typography variant="h2" sx={{mb: 4}}>
            Login
        </Typography>
        <form>
            <OutlinedInput placeholder="Username" sx={{ mb: 2}} fullWidth/>
            <OutlinedInput placeholder="Password" type="password" sx={{ mb: 2}} fullWidth/>
            <Button variant="contained" fullWidth>Login</Button>
        </form>
    </Box>
}