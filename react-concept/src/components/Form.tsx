import { useState } from "react"

export default function Form(){
    const [val,setVal] = useState<string>('')
    const [counter,setCounter] = useState<number>(0)
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [age,setAge] = useState<number>(0)
    return(
        <div>
            <h1>Exercise 1: Name Input</h1>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)}/>
            <h2>{val}</h2>
            <button onClick={()=>setVal('')} >Clear</button>
            
            <h1>Exercise 2: Live character counter</h1>
            <input type = "text" onChange={(event)=>setCounter((event.target.value).length)}  />
            <h2>{counter}</h2>

            <h1>Exercise 3: Simple Profile</h1>
            Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br />
            Email: <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            Age: <input type="text" value={age} onChange={(e)=>setAge(Number(e.target.value))} />
            <br />
            Name:  {name} <br /> Email: {email} <br /> Age: {age}
        </div>
    )
}