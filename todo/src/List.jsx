import { List as MuiList } from "@mui/material";

export default function List({children}) {
    return <MuiList>
        {/* <span sx={{mt:54}}>Section Title</span> */}
        {children}
    </MuiList>
}