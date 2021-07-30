import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

const Footer = () => {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
        console.log(todos)
    }

    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false)
    }

    const handleDeleteAll = () => {
        setTodos([])
    }


    return (
        <>
            {
                todos.length === 0 ? <h2>Congratulations! Nothings to do</h2>
                    :
                    <div className='row'>
                        <label htmlFor="all">
                            <input type="checkbox" name='all' id='all'
                                onClick={handleCheckAll} checked={checkAll} />
                            All
                        </label>
                        <p>You have {newTodosComplete().length} to do</p>
                        <button className="DeleteAll"
                            onClick={handleDeleteAll}>Delete All</button>
                    </div>
            }
        </>
    )
}

export default Footer
