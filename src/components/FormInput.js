import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from './DataProvider'


const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext)
    const [todoName, setTodoName] = useState('')
    const todoInput = useRef()

    const addTodo = e => {
        e.preventDefault()
        setTodos([...todos, { id: Math.floor(Math.random() * 10000), name: todoName, complete: false }])
        setTodoName('')
        todoInput.current.focus()
    }

    useEffect(() => {
        todoInput.current.focus()
    })

    return (
        <div>
            <form autoComplete="off" onSubmit={addTodo}>
                <input type="text" name="todos" id='todos'
                    ref={todoInput}
                    required placeholder='What needs to be done?'
                    value={todoName}
                    onChange={e => setTodoName(e.target.value.toLowerCase())} />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default FormInput
