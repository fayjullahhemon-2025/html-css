// import Todo from './todo'
// import Task from './Task'
// import Book from './Book'
import Users from './Users'
import './App.css'

function App() { //main entry point functon
const books = ['physics','chemistry','biology'];

  return (
    <>


      <div>
        <h1>Get started</h1>

        <Users></Users>


      {/* {
        books.map(book=> <Book name = {book}></Book>)
      } */}


        {/* {
          books.map(book=> <li>{book}</li>)
        } */}


        {/* <Task name="finish module" isDone={false}></Task>
        <Task name="Facebooking time wasting" isDone={true}></Task>
        <Task name="Sharing Reels" isDone={true}></Task> */}
        {/* <Todo task = "Practice react" time="5 am"></Todo>
        <Todo task = "Take a shower" time="10 am"></Todo>
        <Todo task = "No social media today" ></Todo> */}
        {/* <Person></Person>
        <Products name="Laptop" price="32000"></Products>
        <Products name="Mobile" price="12000"></Products>
        <Student name="Emon" grades="3.62"></Student> */}
      </div>



    </>
  )
}
// function Person() { //component
//   return <p>Kire Ananna...</p> //eta jsx
// }
// function Products(promps) {
//   // let price = 3200;
//   const productStyle = {
//     border: '1px solid yellow',
//     lineHeight: '30px',
//     color: 'white',
//     borderRadius:'12px',
//     marginTop:'15px'
//   }
//   return (
//     <>
//       {/* <div style={{
//         border:'1px solid green',
//         lineHeight:'30px',
//         color:'white'
//       }}> */}
//       {/* <div className='productStyle'> */}
//       <div style={productStyle}>
//         <p>{promps.name}</p>
//         <p>{promps.price}</p>
//       </div>
//     </>
//   )
// }

// function Student(promps) {
//   const studentStyle = {
//     border: '2px solid red',
//     borderRadius: '12px',
//     margin: '10px'
//   }
//   return (
//     // <div className = 'student'>
//     // <div style = {studentStyle}>
//     <div style={
//       {
//         border: '2px solid red',
//         borderRadius: '12px',
//         margin: '10px',
//         paddingBottom: '15px'
//       }
//     }>
//       <h3>Name: {promps.name}</h3>
//       <p>Grades: {promps.grades}</p>
//     </div>
//   )
// }
export default App
