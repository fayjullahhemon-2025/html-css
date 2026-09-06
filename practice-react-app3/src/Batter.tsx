import {useState} from "react"
export default function Batter(){
    const [run,setRun] = useState(0);
    function score(r:number){
        setRun(run+r);
    }
    return (
        <div>
            <p>----------</p>
            <h2>Score: {run} </h2>
            <button onClick = {()=>{
                score(1);
            }} >1</button>
            <button onClick = {()=>{
                score(2);
            }}>2</button>
            <button onClick = {()=>{
                score(3)
            }}>3</button>
            
        </div>
    )
}