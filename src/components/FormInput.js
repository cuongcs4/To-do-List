import React, { useContext, useEffect, useRef, useState } from 'react'
import { addTaskAPI, getAllTaskAPI } from 'service/task.service'
import { DataContext } from './DataProvider'


const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext)
    const [todoName, setTodoName] = useState('')
    const todoInput = useRef()
    const addTask = async (description) => {
        await addTaskAPI(description);
    };

    const getAllTask = async () => {
        const {
            data: { data }
        } = await getAllTaskAPI();
        if (data.length > 0) {
            const mapData = data.map((todo) => ({ ...todo, id: todo._id }));
            setTodos(mapData);
        }
    };
    
    const addTodo = async e => {
        e.preventDefault()
        await addTask(todoName)
        getAllTask()
        setTodoName('')
        todoInput.current.focus()
    }

    
    useEffect(() => {
        todoInput.current.focus()
    })

    return (
        <div className='form-wrapper'>
            <form className='form-body' autoComplete="off" onSubmit={addTodo}>
                <input className='form-body__create' type="text" name="todos" id='todos'
                    ref={todoInput}
                    required placeholder='What needs to be done?'
                    value={todoName}
                    onChange={e => setTodoName(e.target.value.toLowerCase())} />
                <button className='form-body__submit' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default FormInput
