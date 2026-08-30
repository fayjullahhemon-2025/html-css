
import './App.css'

function App() { //main entry point function


  return (
    <>


      <div>
        <h1>Get started</h1>
        <Person></Person>
        <Products name="Laptop" price="32000"></Products>
        <Products name="Mobile" price="12000"></Products>
        <Student name="Emon" grades="3.62"></Student>
      </div>



    </>
  )
}
function Person() { //component
  return <p>Kire Ananna...</p> //eta jsx
}
function Products(promps) {
  // let price = 3200;
  const productStyle = {
    border: '1px solid yellow',
    lineHeight: '30px',
    color: 'white',
    borderRadius:'12px',
    marginTop:'15px'
  }
  return (
    <>
      {/* <div style={{
        border:'1px solid green',
        lineHeight:'30px',
        color:'white'
      }}> */}
      {/* <div className='productStyle'> */}
      <div style={productStyle}>
        <p>{promps.name}</p>
        <p>{promps.price}</p>
      </div>
    </>
  )
}

function Student(promps) {
  const studentStyle = {
    border: '2px solid red',
    borderRadius: '12px',
    margin: '10px'
  }
  return (
    // <div className = 'student'>
    // <div style = {studentStyle}>
    <div style={
      {
        border: '2px solid red',
        borderRadius: '12px',
        margin: '10px',
        paddingBottom: '15px'
      }
    }>
      <h3>Name: {promps.name}</h3>
      <p>Grades: {promps.grades}</p>
    </div>
  )
}
export default App
