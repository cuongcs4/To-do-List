import React, { createContext, useEffect, useState } from "react";
import { getAllTaskAPI } from "service/task.service";
//alo, còn thấy gì k

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);

    //  useEffect(() => {
    //   const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    //   if (todoStore) setTodos(todoStore);
    //  }, []);

    //  useEffect(() => {
    //   localStorage.setItem("todoStore", JSON.stringify(todos));
    //  }, [todos]);

    // :)) tiếp
    // =]]]] dkm sáng cũng cấn
    // choox naof chả như nhau, cái này đang bao quát rồi, cho nó bao quát cmn lu
    useEffect(() => {
        const getAllTask = async () => {
            const {
                data: { data }
            } = await getAllTaskAPI();
            console.log(data)
            if (data.length > 0) {
                const mapData = data.map((todo) => ({ ...todo, id: todo._id }));
                setTodos(mapData);
            }
        };
        getAllTask();
    }, []);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    );
};
