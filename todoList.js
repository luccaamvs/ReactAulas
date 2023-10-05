import React, {useContext} from "react";
import StoreContext from "./todoContent";
import { observer } from "mobx-react-lite";

const TodoList = () => {
    const todoStore = useContext(StoreContext)
    return (
        <div>
            {todoStore.todos.map(
                (todo,index)=>(
                    <div>
                        {todo}
                        <button className="remover" onClick={_ => todoStore.removeTodo(index)}>Remover</button>
                    </div>
                )
            )}
        </div>
    );
}

export default observer(TodoList)