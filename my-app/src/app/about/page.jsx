import Image from "next/image";
import React from "react";

export default function AboutPage(){
    return (
        <div className="flex justify-center items-center font-bold text-4xl flex-col" >
            <h1>Welcome TO About Page</h1>
            <Image src='/ektabeda.png' width={300} height={300} alt='ekta bedar chobi' ></Image>
            <Image src='/ektabedi.png' width={300} height={300} alt="ekta bedir chobi" ></Image>
            <Image src='/arektabeda.png' width={300} height={300} alt='arekta bedar chobi' ></Image>
            <Image src='https://images.unsplash.com/photo-1742210019103-478c7140efbb' width={300} height={300} alt='arekta bedir chobi'></Image>
        </div>
    )
}