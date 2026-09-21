import React from 'react'
export default function blogLayout({children}){
    return(
        <div>
            <h1>Total blogs 10</h1>
            <div>
                {children}
            </div>
        </div>
    )
}