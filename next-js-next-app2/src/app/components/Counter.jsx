'use client'
import React, { useState } from 'react'

export default function Counter(){
    const [count,setCount] = useState(0);
    const countHandling  = ()=>{
        setCount(count+1);
    }
    console.log('Rendering from Client Counter Component',{count})

    return(
        <div>
            <h2>Count Value:{count} </h2>
            <button onClick={()=>{countHandling()}} className='p-2 bg-amber-400 text-white rounded-lg my-2 ' >
                Increase by 1
            </button>
        </div>
    )
}