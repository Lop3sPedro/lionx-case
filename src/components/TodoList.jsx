
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <List style={{ margin: '20px 0' }}>
            {props.list.map(item => (
                <TodoItem
                    key={ item.name }
                    item={ item }
                    filter={ props.filter }
                    handleCheck={ props.handleCheck }
                    handleRemove={ props.handleRemove }
                />
            ))}
      </List>
    )
}

export default TodoList;