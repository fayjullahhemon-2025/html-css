export default function TodosCard({todo}){
    return(
        <div>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed}</p>
        </div>
    )
}