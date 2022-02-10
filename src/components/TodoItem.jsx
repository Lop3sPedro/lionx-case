
import { ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Checkbox, Typography } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";

const TodoItem = (props) => {
    const COMPLETED = 2;

    if (props.filter && props.filter !== props.item.status)
        return null;

    const TextItemList = () => {
        return props.item.status === COMPLETED
            ? (<del>{ props.item.name }</del>)
            : (<>{ props.item.name }</>)
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={ () => props.handleRemove(props.item) }>
                    <CancelOutlined color="error" />
                </IconButton>
            }
            sx={{
                '&:hover': { boxShadow: "0 0 7px #ccc" }
            }}
            disablePadding
        >
            <ListItemButton onClick={ () => props.handleCheck(props.item) } dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={ props.item.status === COMPLETED ? true : false }
                        color="default"
                        tabIndex={ -1 }
                        disableRipple
                    />
                </ListItemIcon>

                <ListItemText>
                    <Typography >
                        { TextItemList() }
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem;
