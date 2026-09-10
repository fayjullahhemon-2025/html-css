import { Suspense } from "react";
import Plants from "./Components/Plants/Plants"
import type { PlantTypes } from "./Components/types/types";


const plantsPromiseData = async():Promise<PlantTypes[]>=>{
  const res = await fetch('https://openapi.programming-hero.com/api/plants');
  const data = await res.json();
  return data?.plants;
}
function App() {
  

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Plants plantsPromiseData = {plantsPromiseData()}></Plants>
      </Suspense>
    </>
  )
}

export default App
