export default async function TodoPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    return (
        <div className='grid grid-cols-4 gap-2 m-5' >
            {
                todos.map(todo => <div className="card card-border bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="card-title">{todo.title}</h2>
                        <p>Completed: {todo.completed ? "Done":"Not Done"}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}