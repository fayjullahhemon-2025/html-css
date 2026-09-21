import React from "react";  
export default function developerLayout({children}){
    return(
        <div>
            <div>
                <h1>Welcome to Developer page</h1>
            </div>
            <div>{children}</div>
        </div>
    )
}