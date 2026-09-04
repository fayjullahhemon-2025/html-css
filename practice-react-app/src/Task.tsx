import './App.css'

interface TaskPropTypes{
    name:string,
    isDone:boolean 
}

export default function Task({name,isDone}:TaskPropTypes){
    if(isDone){
        return <li>Completed: {name}</li>
    }
    // else{
    //     return <li>Pending: {name}</li>
    // }
    return <li>Pending: {name}</li>
}