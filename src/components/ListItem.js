import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

const ListItem = ({ todo, id, checkComplete, handleEditTodos }) => {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)
    const [todos, setTodos] = useContext(DataContext)
     const handleOnEdit = id => {
        setOnEdit(true)
    }

    const handleSave = id => {
        setOnEdit(false)
        if (editValue)
            handleEditTodos(editValue, id)
        else
            setEditValue(todo.name)
    }

    const handleOnDelete = id => {
        const newTodos = [...todos]
        if (id !== -1) {
            newTodos.splice(id,1)
        }
        setTodos(newTodos)
        console.log(todos)
    }

    if (onEdit) {
        return (
            <li>
                <input type="text" id='editValue' value={editValue}
                    name='editValue'
                    onChange={e => setEditValue(e.target.value.toLowerCase())} />

                <button onClick={() => handleSave(todo.id)}>Save</button>
            </li>
        )
    }
    else {
        return (
            <li>
                <label
                    htmlFor={todo.id}
                    className={todo.complete ? 'active' : ''}

                >
                    <input
                        type="checkbox"
                        id={todo.id}
                        checked={todo.complete}
                        onChange={() => checkComplete(id)} />
                    {todo.name}
                </label>
                <div>
                    <button
                        className='Edit'
                        disabled={todo.complete}
                        onClick={handleOnEdit}
                    >
                        Edit
                    </button>
                    <button className='Delete' onClick={() => handleOnDelete(id)}>Delete</button>
                </div>
            </li>
        )
    }
}

export default ListItem
