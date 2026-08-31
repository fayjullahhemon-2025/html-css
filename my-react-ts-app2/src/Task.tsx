interface TaskPropTypes {
    name: string,
    isDone: boolean

}
export default function Task({ name, isDone } : TaskPropTypes){
    let list;
    if(isDone){
        list = <li>Done:{name}</li>
    }else{
        list = <li>Not Done: {name}</li>
    }
    return list;
}
// export default function Task({ name, isDone } : TaskPropTypes){
//     // return isDone && <li>Completed:{name}</li>
//     // return isDone===false && <li>Hurry Up: {name}</li>
//     return isDone === false || <li>Hurry up: {name}</li>
// }
// export default function Task({ name, isDone } : TaskPropTypes){
//     return isDone ? <li>Completed:{name}</li>: <li>Pending: {name}</li>
// }
// export default function Task({ name, isDone } : TaskPropTypes){
//     if (isDone === true) {
//         return <li>Completed:{name}</li>
//     }else{
//         return <li>Pending:{name}</li>
//     }
// }
