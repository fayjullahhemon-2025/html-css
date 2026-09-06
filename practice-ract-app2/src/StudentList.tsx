import type {StudentType} from './types'

const student:StudentType[] = [
    {id:72 , name:"Emon", grade:3.62},
    {id:75 , name:"Mehrin", grade:3.78},
    {id:98 , name:"Chaity", grade:3.72},
]

export default function StudentList(){
    return (
        <>
            {
                student.map(st=> <ul>
                    <li>ID: {st.id}
                        <ul>
                            <li>Name: {st.name}</li>
                            <li>Name: {st.grade}</li>
                        </ul>
                    </li>
                </ul> )
            }
        </>
    )
}