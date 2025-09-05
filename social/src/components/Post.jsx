import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    IconButton,
    Typography
} from "@mui/material";

import {
    ChatBubbleOutlineOutlined as CommentIcon,
    FavoriteBorderOutlined as LikeIcon
} from "@mui/icons-material";
export default function Post() {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Avatar sx={{ width: 64, height: 64, background: 'green' }} />
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography>Khun Kyaw Hla</Typography>
                    <Typography sx={{ opacity: 0.4 }}>@kyawHla</Typography>
                </Box>
                <Typography sx={{ color: "green", fontSize: 14 }}> A few second ago </Typography>
                <Typography sx={{ fontSize: 21, cursor: "pointer"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque obcaecati provident magnam. Autem, atque?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2}}> 
                    <ButtonGroup>
                        <IconButton>
                            <LikeIcon color="error"/>
                            <Button variant="text" size="sm">10</Button>
                        </IconButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <IconButton>
                            <CommentIcon color="success"/>
                            <Button variant="text" size="sm">5</Button>
                        </IconButton>
                    </ButtonGroup>
                </Box>
            </CardContent>
        </Card>
    )
}