import React from "react"
export default function devLayout({children}) {
    return (
        <div>
            <h2>Kaj hoy na</h2>
            <div>
                {children}
            </div>
        </div>
    )
}