
import { Suspense } from 'react'
import './App.css'
import Batter from './Batter'
import Cart from './Cart'
import Counter from './Counter'
import Light from './Light'
import PasswordShowHide from './PasswordShowHide'
import Users from './Users'
import Post from './Post'
import Comments from './Comments'
import Albums from './Albums'
import Photos from './Photos'
import Todos from './Todos.tsx'

function App() {
  // const divStyle = {
  //   width:'100%',
  //   display:'flex',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   flexDirection:'column',
  //   gap:'15px',
  //   border:'1px solid red'
  // }as const; // as const na likhle red mark ashtesilo
  // const buttonStyle = {
  //   width:'80px',
  //   height:'30px'
  // }

  // function eventHandler1(){
  //   alert('button 1 pressed');
  // } 
  // const eventHandler2 = () =>{
  //   alert('Button 2 pressed')
  // }
  // const eventHandler4 = (id:number) =>{
  //   alert(`Button ${id} pressed`)
  // }
  const usersDataPromise = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
  const userPostPromise = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
  }
  const userCommentsPromise = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    return data;
  }
  const userAlbumsPromise = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();
    return data;
  }
  const userPothosPromise = async() =>{
    const res = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
    const data = await res.json();
    return data;
  }
  const userTodosPromise = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return data;
  }
  return (
    <>
      <Suspense>
        <Todos userTodosPromise = {userTodosPromise()}></Todos>
      </Suspense>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>
      <Suspense>
        <Post userPostPromise={userPostPromise()}></Post>
      </Suspense> */}
      {/* <p>-----------------------------------------------</p>
      <Suspense fallback = {<p>Loading comments....</p>}>
        <Comments userCommentsPromise = {userCommentsPromise()}></Comments>
      </Suspense> */}
      {/* <p>--------------------------------------------------</p>
      <Suspense fallback={<p>Loading albums....</p>}>
        <Albums></Albums>
      </Suspense> */}
      <p>-----------------------------------------------</p>
      {/* <Suspense>
        <Albums userAlbumsPromise = {userAlbumsPromise()}></Albums>
      </Suspense> */}
      {/* <p>--------------------------------
      </p>
      <Suspense fallback = {<p>Loading....</p>}>
        <Photos userPothosPromise = {userPothosPromise()}></Photos>
      </Suspense> */}
      {/* <PasswordShowHide></PasswordShowHide> */}
      {/* <Light></Light> */}
      {/* <Batter></Batter> */}
      {/* <Counter></Counter> */}
      {/* <Cart></Cart> */}
      {/* <div style = {divStyle}> */}
      {/* <button onClick = {eventHandler1()}>Button 1 </button> */}
      {/* <button onClick = 'eventHandler1()'>Button1</button> */}
      {/* <button style={buttonStyle} onClick={eventHandler1}>Button 1</button>
        <button style = {buttonStyle} onClick = {eventHandler2}>Button 2</button>
        <button style = {buttonStyle} onClick = {()=>{
          alert(`Button ${3} pressed`);
        }}>Button 3</button>
        <button style = {buttonStyle} onClick = {()=>{
          eventHandler4(4);
        }}>Button 4</button>
      </div> */}
    </>
  )
}

export default App
