
import './App.css'
import Cart from './Cart'

function App2() {
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
  return (
    <>
      <Cart></Cart>
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

export default App2
