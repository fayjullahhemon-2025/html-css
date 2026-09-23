import React from 'react'
import Counter from '../components/Counter'
export default function dashboardPage() {
    console.log('Render from dashboard component')
    return (
        <div>
            <div>
                Dashboard
            </div>
            <Counter></Counter>
        </div>
    )
}