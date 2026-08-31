// function Todo(tasks){
//     return <li>DO this work: {tasks.task}</li>
// }
// function Todo({task,time}){
//     return <li>DO this work: {task} at: {time}</li>
// }
interface TodoPropType{
    task:string,
    time?:string
}
function Todo({task,time}:TodoPropType){
    return <li>Task: {task} at: {time}</li>
}
// function Todo({task,time}:{task:string,
//     time?:string}){
//     return <li>Task: {task} at: {time}</li>
// }
// function Todo(props:TodoPropType){
//     return <li>DO this work: {props.task} at: {props.time}</li>
// }
export default Todo;

const {task,time} = {task:'take a shower',time:'10 am'}