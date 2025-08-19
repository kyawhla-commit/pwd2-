import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import {
    Delete as DeleteIcon
} from "@mui/icons-material";
export default function Item({ item, del }) {
  return (
    <ListItem secondaryAction = {
        <IconButton onClick={()=> del(item.id)}>
            <DeleteIcon color="error"/>
        </IconButton>
    }>
      <ListItemText>{item.name}</ListItemText>
      
    </ListItem>
  );
}
