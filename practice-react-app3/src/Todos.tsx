import { use } from "react"
import TodosCard from "./TodosCard";

export default function Todos({userTodosPromise}){
    let todos = use(userTodosPromise);
    return (
        <div>
            {
                todos.map(todo=> <TodosCard todo={todo}></TodosCard>
                 )
            }
        </div>
    )
}