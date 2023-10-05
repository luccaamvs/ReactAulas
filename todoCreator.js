import React, { useContext, useState } from "react";
import StoreContext from "./todoContent";
import { observer } from "mobx-react-lite";

const TodoCreator = () => {
    const todoStore = useContext(StoreContext);
    const [newTodo, setNewTodo] = useState('')

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            todoStore.addTodo(newTodo.trim())
            setNewTodo('')
        }
    }
    return (
        <div className="container">
            <h2>Lista de Tarefas</h2>
            <div className="list">
                
                <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Digite uma nova tarefa" />
                <button className="add" onClick={handleAddTodo}>Add Tarefa</button>

            </div>
        </div>

    )
}

export default observer(TodoCreator)