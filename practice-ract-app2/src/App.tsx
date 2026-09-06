// import Book from './Book'
// import User from './User'
// import Sports from './Sports'
// import ProfileCard from './ProfileCard.tsx'
import type { ProductType } from './types.ts'
import './App.css'
import ProductCard from './ProductCard.tsx'

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
      {/* <ProductCard productName='Computer' price={48000}></ProductCard> */}
      {/* <ProfileCard name='Emon' age={26} hobby = "Sleeping" ></ProfileCard> */}
      {
        products.map(product=> <ProductCard productName={product.productName} price={product.price}></ProductCard>)
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

