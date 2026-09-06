// import Book from './Book'
// import User from './User'
// import Sports from './Sports'
// import ProfileCard from './ProfileCard.tsx'
import type { ProductType } from './types.ts'
import './App.css'
import StudentList from './StudentList.tsx'
// import ProductCard from './ProductCard.tsx'
// import WelcomeCard from './WelcomeCard.tsx'
// import Footer from './Footer.tsx'
// import Cart from './Cart.tsx'
// import UserGreeting from './UserGreeting.tsx'

function App() {
  const products:ProductType[] = [
    {productName:"Computer" , price:49000},
    {productName:"Computer" , price:49000},
    {productName:"Computer" , price:49000},
    {productName:"Computer" , price:49000},
    {productName:"Computer" , price:49000},
  ]
  // const books:string[] = ["Physics","Chemistry","Biology","Math"];
  return (
    <>
    <div>
      <StudentList></StudentList>
      {/* <UserGreeting></UserGreeting> */}
      {/* <WelcomeCard></WelcomeCard>
        <Footer></Footer> */}
        {/* <Cart itemCount={3}></Cart> */}
    </div>
      {/* <ProductCard productName='Computer' price={48000}></ProductCard> */}
      {/* <ProfileCard name='Emon' age={26} hobby = "Sleeping" ></ProfileCard> */}
      {
        
        // products.map(product=> <ProductCard productName={product.productName} price={product.price}></ProductCard>)
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

