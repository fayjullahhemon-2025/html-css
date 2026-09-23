import React, { Suspense } from "react"; 
import Searchbox from "../components/Searchbox";
export default function foodPage(){
    const seachPromiseData = async()=>{
        const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
        const data = await res.json();
        const foods = data.data;
        return foods;
    }
    return(
        <div>
            <Suspense fallback={<p>Loading....</p>} >
                <Searchbox seachPromiseData= {seachPromiseData()} ></Searchbox>
            </Suspense>
        </div>
    )
}