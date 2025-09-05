import {
    Avatar,
    Box, IconButton,
    Typography
} from "@mui/material";

import {
    DeleteOutline as DeleteIcon
} from "@mui/icons-material";
export default function Comment() {


    return (
        <Box sx={{ p: 2, border: "1px solid #aaaaaa40", mb: 2}}>
            <IconButton sx={{ float: "right" }}>
                <DeleteIcon sx={{ color: "gray" }} />
            </IconButton>
            <Box sx={{ display: "flex", gap: 4 }}>
                <Avatar sx={{ width: 48, height: 48, background: 'grey' }} />
            </Box>
            <Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>Khun Tu Pi</Typography>
                <Typography sx={{ opacity: 0.4 }}>@Tupi</Typography>
            </Box>
            <Typography sx={{ color: "green", fontSize: 14 }}> A few second ago </Typography>
            <Typography
                sx={{ fontSize: 18 }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque obcaecati provident magnam. Autem, atque?
            </Typography>
            </Box>
            
        </Box>
    )
}