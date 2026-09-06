// import Book from './Book'
// import User from './User'
// import Sports from './Sports'
import ProfileCard from './ProfileCard.tsx'
import './App.css'

function App() {

  // const books:string[] = ["Physics","Chemistry","Biology","Math"];
  return (
    <>
      <ProfileCard name='Emon' age={26} hobby = "Sleeping" ></ProfileCard>
      {
        // <Sports></Sports>
        // <User></User>
        // books.map(book=> book) // PhysicsChemistryBiologyMath
        // books.map(book=> <li>{book}</li>) 
        // books.map(book=> <Book name={book}></Book>)
      }
    </>
  )
}

export default App

