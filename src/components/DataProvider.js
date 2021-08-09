import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllTaskAPI } from "service/task.service";
//alo, còn thấy gì k

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);
    const history = useHistory()
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
            if (data.length > 0) {
                const mapData = data.map((todo) => ({ ...todo, id: todo._id }));
                setTodos(mapData);
            }
        };
        const accessToken = sessionStorage.getItem('tdl-token')
        if (accessToken)
            getAllTask();
        else 
            history.push('/')
    }, [history]);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    );
};
