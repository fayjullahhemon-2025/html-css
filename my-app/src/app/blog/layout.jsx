import React from "react";

export default function BlogLayout({children}){
    return(
       <div>
         <div>
            <h2>Fixed Content of Blog</h2>
        </div>
        <div>{children}</div>
       </div>
    )
}