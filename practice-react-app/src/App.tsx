// import Todo from './Todo'
// import Task from './Task'
// import Books from './Books'
import User from './User'
import './App.css'

export default function App() {
  // const books:string[] = ["Physics", "Chemistry", "Math", "Biology"];
  
  return (
    <>
      <div>
        {
          <User ></User>
        }
      </div>
      {/* {
        books.map(book=> <Books name={book}></Books>)
      } */}
      {/* <Task name="Coding" isDone ={true}></Task>
    <Task name="Eating" isDone ={false}></Task> */}
      {/* <Todo task = "Cudling pong" time = "3 pm"></Todo> */}
      {/* <Todo task1 = 'Coding' task2 = 'Eating'></Todo> */}
      {/* <Todo></Todo> */}
      {/* <Person></Person>*/}
      {/*function ke html tag er moto likhte hobe */}
      {/* <Welcome></Welcome> */}
      {/* <Student name="Emon" age="26"></Student> */}
      {/* <Student></Student>
      <Student></Student> */}

    </>
  )
}

//Single root element
// function Person(){
//   return <h1>Hello World!</h1>
// }
//if more than element 
// function Welcome(){
//   return (
//     <div>
//       <h3>Hello Emon</h3>
//       <p>How are you?</p>
//     </div>
//   )
// }

//if more than element using <></>
// function Student(){
//   return (
//     <>
//       <h3>Fayjullah Haque Emon</h3>
//       <p>Lorem ipsum dolor sit amet consectetur</p>
//     </>
//   )
// }
//style in component. first method
// function Student() {
//   return (
//     <>
//       <div className = "student">
//         <h3>Name:</h3>
//         <p>age:</p>
//       </div>
//     </>
//   )
// }
// //style in component. 2nd method
// function Student() {
//   const studentStyle = {
//         color:'white',
//         backgroundColor:'salmon',
//         border:'1px solid red',
//         borderRadius:'5px',
//         margin:'5px'

//   }
//   return (
//     <>
//       <div style={studentStyle}>
//         <h3>Name:</h3>
//         <p>age:</p>
//       </div>
//     </>
//   )
// }
// function Student(props: { name?: string, age?: string }) {
//   console.log(props);
//   return (
//     <>
//       <div style={{
//         color: 'white',
//         backgroundColor: 'salmon',
//         margin: '5px',
//         padding: '2px',
//         border: '2px solid red',
//         borderRadius: '10px'
//       }}>
//         <h3>Name:</h3>
//         <p>Age:</p>
//       </div>
//     </>
//   )
// }