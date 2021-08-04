import React, { useCallback, useContext, useState } from "react";
import { deleteTaskByIdAPI } from "service/task.service";
import { DataContext } from "./DataProvider";

const ListItem = ({ todo, id, checkComplete, handleEditTodos }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.description);
  const [todos, setTodos] = useContext(DataContext);

  const deleteTaskById = useCallback(async ( id ) => {
    await deleteTaskByIdAPI( id );
  }, []);

  const handleOnEdit = (id) => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) handleEditTodos(editValue, id);
    else setEditValue(todo.description);
  };

  const handleOnDelete = async (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    await deleteTaskById(id)
  };
  //
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          value={editValue}
          name="editValue"
          onChange={(e) => setEditValue(e.target.value.toLowerCase())}
        />

        <button onClick={() => handleSave(todo.id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li className={todo.completed ? "active" : ""}>
        <label htmlFor={todo.id} className={todo.completed ? "active" : ""}>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={() => checkComplete(id)}
          />
          {todo.description}
        </label>
        <div>
          <button
            className="Edit"
            disabled={todo.completed}
            onClick={handleOnEdit}
          >
            Edit
          </button>
          <button className="Delete" onClick={() => handleOnDelete(todo.id)}>
            Delete
          </button>
        </div>
      </li>
    );
  }
};

export default ListItem;
