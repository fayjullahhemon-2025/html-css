import { useEffect, useState } from "react";

export default function Todos2(){
    const [todo,setTodo] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setTodo(data);
        })
    },[])
    return (
        <div>
            <h3>Todo: {todo.length}</h3>
        </div>
    )
}