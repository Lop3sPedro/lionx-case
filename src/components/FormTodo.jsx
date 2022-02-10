
import { Button, TextField, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const FormTodo = (props) => {
    const showInput = () => {
        return props.showedInput
            ? <TextField
                type="text"
                label="New Item"
                variant="outlined"
                value={ props.value }
                onChange={ props.handleChange }
            />
            : null;
    }

    return (
        <form onSubmit={ props.handleSubmit } style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
            { showInput() }

            <Button variant="text" type="submit">
                <AddCircleOutline /> Create New Item
            </Button>
        </form>
    )
} 

export default FormTodo;
