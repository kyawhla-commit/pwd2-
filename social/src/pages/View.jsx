import { Box } from "@mui/material";
import Post from "../components/Post";
import Comment from "../components/Comment";

export default function View() {
    return <Box>
        <Post/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Box>
}