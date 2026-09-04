import './App.css'

// function Todo() {
//     return (
//         <>
//             <div className='todo'>
//                 <h3>Pending work:</h3>
//                 <h3>Done work:</h3>
//             </div>
//         </>
//     )
// }
// export default Todo;
// function Todo(props:{task1:string,task2:string}){
//     return (
//         <>
//             <div>
//                 <h3>Pending Task: {props.task1}</h3>
//                 <h3>Done Task: {props.task2}</h3>
//             </div>
//         </>
//     )
// }
// export default Todo;

// interface TodoPrototype {
//     task:string,
//     time?:string 
// }

// function Todo(promps:TodoPrototype){
//     const {task,time} = promps;
//     return (
//         <>
//             <li>
//                 Work: {task} at {time}
//             </li>
//         </>
//     )
// }
// export default Todo;

function Todo({task,time}:{task:string,time:string}){
    return (
        <>
            <li>Work: {task} at {time}</li>
        </>
    )
}
export default Todo;