import React, { useContext, useState, useCallback, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { updateTaskByIdAPI, deleteTaskByIdAPI } from "service/task.service";

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);


  const newTodosComplete = useCallback(() => {
    return todos.filter((todo) => todo.completed === false);
  }, [todos]);

  useEffect(() => {
    // const isAllChecked = todos.find((todo) => todo.completed === false)
    if (newTodosComplete().length > 0)
      setCheckAll(false)
    else setCheckAll(true)
  }, [checkAll, newTodosComplete, todos])

  const updateTaskById = async ({ id, completed }) => {
    await updateTaskByIdAPI({ id, completed });
  };

  const deleteTaskById = async ( id ) => {
    await deleteTaskByIdAPI( id );
  };


  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach(async (todo) => {
      todo.completed = !checkAll;
      await updateTaskById({ id: todo.id, completed: todo.completed })
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };


  const handleDeleteAll = () => {
    const newTodos = [...todos];
    newTodos.forEach(async (todo) => {
      await deleteTaskById(todo.id)
    });
    setTodos([]);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Congratulations! Nothings to do</h2>
      ) : (
        <div className="footer-wrapper">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            All
          </label>
          <p>You have {newTodosComplete().length} to do</p>
          <button className="DeleteAll" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
