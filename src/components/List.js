import React, { useContext, useCallback } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";
import { updateTaskByIdAPI } from "service/task.service";

const List = () => {
    const [todos, setTodos] = useContext(DataContext);
    const updateTaskById = useCallback(async ({ id, completed }) => {
        await updateTaskByIdAPI({ id, completed });
    }, []);
    // mai có làm k?
    // cos m 
    //nói chung là được rồi đó, nhưng còn cái rerender lại cái list, m tự nghĩ nhé,
    // cấu trúc context t ít sài nên chưa biết solve sao :v
    // oke :v để đó tự xử, nãy h cũng hiểu sơ sơ, code như lol :v 
    // ok luon, cấu trúc lại đi t thấy như lone thâjt :v, gì mà item sài cả context
    // đm thg nào bày m bậy vl :v, cái item rõ là truyền vào thôi, éo cầN sài context đây
    // cái này cái clip nó làm làm theo th ôi :v 
    // ok luôn t out nhé :v  ok :v
    // :v để mai coi cái tut todo của th thái anh nó code theo rồi so thử
    // ok cũng buonf ngủ, thôi nghỉ
    const switchComplete = async (id) => {
        console.log(id)
        const newTodos = [...todos]
        newTodos.forEach(async (todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                //const currentTodo = todos.find((todo) => todo.id === id);
                await updateTaskById({ id: todo.id, completed: todo.completed })
            }
        })
        setTodos(newTodos)
        // if (data) {
        //     const {
        //         data: { data }
        //     } = data;
        //     const mapTodo = todos.map((todo) => {
        //         if (todo.id === id) {
        //             return data;
        //         }
        //         return todo;
        //     });
        //     setCheck(!check)
        //     setTodos(mapTodo);
        // }
    };

    const handleEditTodos = (editValue, id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.description = editValue;
            }
        });
        setTodos(newTodos);
    };
    return (
        <div className='list-wrapper'>
            <ul className='list-body'>
                {todos.map((todo, index) => (
                    <ListItem
                        todo={todo}
                        key={index}
                        id={todo.id}
                        checkComplete={switchComplete}
                        handleEditTodos={handleEditTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;
