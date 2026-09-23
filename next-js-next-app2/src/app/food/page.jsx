// import React, { Suspense, useEffect, useState } from "react"; 
import React, { Suspense } from "react"; 
import Searchbox from "../components/Searchbox";
export default function foodPage(){
    // option 1
    // const searchPromiseData = async()=>{
    //     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    //     const data = await res.json();
    //     const foods = data.data;
    //     return foods;
    // }
    //--------------------
    // option 2
    const searchPromiseData2 = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then(res=> res.json());
    //---------------------
    //option 3
    // const [food,setFood] = useState([])
    // useEffect(()=>{
    //     fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    //     .then(res=>res.json())
    //     .then(data=> data.data);
    // },[searchText])
    return(
        <div>
            <Suspense fallback={<p>Loading....</p>} >
                {/* <Searchbox seachPromiseData= {seachPromiseData()} ></Searchbox> */}
                <Searchbox searchPromiseData= {searchPromiseData2} ></Searchbox>
            </Suspense>
        </div>
    )
}