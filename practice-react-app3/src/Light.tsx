import {useState} from "react"

export default function Light(){
    const [state,setState] = useState("on");
    function switchLight(){
        if(state==="on"){
            
            setState("off")
        }else{
            setState("on")
        }
        
    }
    return (
        <>  
            <h3>{state}</h3>
            <button onClick={switchLight}>Switch</button>
        </>
    )
}