export default async function todoPageDetails({params}){
    const {todoId} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = await res.json();
    return(
        <div>
            <h1>Title: {todo.title}</h1>
            <p>User Id: {todo.userId}</p>
            <p>Completed: {todo.completed?"Done":"Not Done"}</p>
        </div>
    )
}