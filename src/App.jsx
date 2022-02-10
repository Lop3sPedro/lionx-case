import { useState, useRef } from "react";
import { Container, Menu, MenuItem, Button, Typography } from "@mui/material";
import { MoreHorizRounded, EventNoteRounded } from "@mui/icons-material";

import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

const App = () => {
  const IN_PROGRESS = 1;
  const COMPLETED = 2;
  const REMOVED = 3;

  const FILTER_BY_IN_PROGRESS = IN_PROGRESS;
  const FILTER_BY_COMPLETED = COMPLETED;
  const FILTER_BY_REMOVED = REMOVED;

  const [ newItem, setNewItem ] = useState("")  
  const [ todo, setTodo ] = useState([]);
  const [ showedInput, setShowedInput ] = useState(false) 
  const [ showedFilters, setShowedFilters ] = useState(false)
  const [ currentFilter, setCurrentFilter ] = useState(FILTER_BY_IN_PROGRESS)

  const filterMenuRef = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault()

    if(showedInput) {
      const addItem = {
        name: newItem,
        status: IN_PROGRESS
      }
      setTodo(oldTodo => [...oldTodo, addItem])
      setNewItem("") 
      setShowedInput(false)
    }
    else setShowedInput(true)
  }

  const handleChange = (event) => {
    setNewItem(event.target.value)
  }

  const handleCheck = (currentItem) => {
    setTodo(oldTodo => oldTodo.map(item => {
      if(currentItem.name !== item.name)
        return item;

      return {
        name: item.name,
        status: currentItem.status === IN_PROGRESS ? COMPLETED : IN_PROGRESS
      }
    }))
  }

  const handleRemove = (currentItem) => {
    setTodo(oldTodo => oldTodo.map(item => {
      if(currentItem.name !== item.name)
        return item;

      return {
        name: item.name,
        status: REMOVED
      }
    }))
  }

  const handleSelectFilter = (filterType) => {
    setCurrentFilter(filterType)
    setShowedFilters(false)
  }

  return (
      <Container style={{ width: '50%', marginTop: '50px' }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">
            <EventNoteRounded fontSize="large" color="primary" /> <b>Today</b>
          </Typography>

          <Button ref={filterMenuRef} onClick={ () => setShowedFilters(true) }>
            <MoreHorizRounded />
          </Button>
        </div>
      
        <Menu anchorEl={ filterMenuRef.current } open={ showedFilters } onClose={ () => setShowedFilters(false) }>
            <MenuItem onClick={ () => handleSelectFilter(FILTER_BY_COMPLETED) }>
              Completed
            </MenuItem>

            <MenuItem onClick={ () => handleSelectFilter(FILTER_BY_IN_PROGRESS) }>
              In Progress
            </MenuItem>

            <MenuItem onClick={ () => handleSelectFilter(FILTER_BY_REMOVED) }>
              Removed
            </MenuItem>
        </Menu>

        <TodoList
          list={ todo }
          filter={ currentFilter }
          handleCheck={ handleCheck }
          handleRemove={ handleRemove }
        />

        <FormTodo
          value={ newItem }
          showedInput={ showedInput }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
        />
      </Container>
  );
}

export default App;
