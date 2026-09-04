import './App.css'

interface TaskPropTypes{
    name:string,
    isDone:boolean 
}

export default function Task({name,isDone}:TaskPropTypes){
    // return isDone === true && <li>Completed: {name}</li>
    // return isDone === false && <li>Pending: {name}</li>
    // return isDone === true || <li>Pending: {name}</li> 
    // return isDone === false || <li>Completed: {name}</li>
    let list;
    if(isDone){
        list = <li>Completed: {name}</li>
    }
    else{
        list = <li>Pending: {name}</li>
    }
    return list;
}

//normal if else
// export default function Task({name,isDone}:TaskPropTypes){
//     if(isDone){
//         return <li>Completed: {name}</li>
//     }
//     // else{
//     //     return <li>Pending: {name}</li>
//     // }
//     return <li>Pending: {name}</li>
// }