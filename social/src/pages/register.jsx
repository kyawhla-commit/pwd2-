import {
    Box,
    Button,
    OutlinedInput,
    Typography,
} from "@mui/material";

import { useForm } from "react-hook-form"

export default function Register() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const onSubmit = data => {
        console.log(data)
    }
    return <Box>
        <Typography variant="h2" sx={{ mt: 4 }}>
            Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <OutlinedInput
                placeholder="Name"
                sx={{ mt: 2 }}
                fullWidth
                {...register("name", { required: true })}
            />
            {errors.name && <Typography color="error">Name is required</Typography>}
            <OutlinedInput
                placeholder="Username"
                sx={{ mt: 2 }}
                fullWidth
                {...register("username", { required: true })}
            />
            {errors.username && <Typography color="error">Username is required</Typography>}
            <OutlinedInput
                placeholder="Short bio"
                sx={{ mt: 2 }}
                fullWidth
            />

            <OutlinedInput
                placeholder="Password"
                type="password"
                sx={{ mt: 2 }}
                fullWidth
                {...register("password", { required: true })}
            />
            {errors.password && 
            <Typography color="error">
                Password is required
            </Typography>}

            <Button type="submit" sx={{ mt: 2}} variant="contained" fullWidth>Register</Button>
        </form>
    </Box>
}