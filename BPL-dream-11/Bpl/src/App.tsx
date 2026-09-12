import { Suspense } from "react";
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

  return (
    <>
      {/* <h1 className="text-amber-500 text-2xl">BPL DREAM 11</h1> */}
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Players playersPromiseData={playersPromiseData()}></Players>
      </Suspense>
    </>
  )
}

export default App
