import {
    Box,
    Button,
    OutlinedInput,
    Typography,
} from "@mui/material";

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { useApp } from "../AppProvider";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const Navigate = useNavigate();

    const { setAuth } = useApp();

    const onSubmit = data => {
        console.log(data)
        setAuth("Alice")
        Navigate("/")
    }
    return <Box>
        <Typography variant="h2" sx={{ mt: 4 }}>
            Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <OutlinedInput
                placeholder="Username"
                sx={{ mt: 2 }}
                fullWidth
                {...register("username", { required: true })}
            />
            {errors.username && <Typography color="error">This field is required</Typography>}

            <OutlinedInput
                placeholder="Password"
                type="password"
                sx={{ mt: 2 }}
                fullWidth
                {...register("password", { required: true })}
            />
            {errors.password &&
                <Typography color="error">
                    This field is required
                </Typography>}

            <Button type="submit" sx={{ mt: 2 }} variant="contained" fullWidth>Login</Button>
        </form>
    </Box>
}