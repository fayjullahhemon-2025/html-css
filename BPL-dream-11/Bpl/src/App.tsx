import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players/Players";
import type  {PlayerTypes}  from "./components/types/PlayerTypes";

function App() {
  const playersPromiseData = async():Promise<PlayerTypes[]>=>{
        const res = await fetch('/data.json');
        const data = await res.json();
        return data;
    }
    const [coin,setCoin] = useState<number>(500);
    const handleSetCoin = (price:number):void=>{
      if(price<=coin){
        setCoin(coin-price);
      }else{
        setCoin(coin);
      }
    }
  return (
    <>
      {/* <h1 className="text-amber-500 text-2xl">BPL DREAM 11</h1> */}
      <Nav coin={coin} ></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Players coin={coin} handleSetCoin = {handleSetCoin} setCoin={setCoin} playersPromiseData={playersPromiseData()}></Players>
      </Suspense>
    </>
  )
}

export default App
