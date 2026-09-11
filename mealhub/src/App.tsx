import { Suspense } from "react";
import MenuItem from "./components/MenuItem/MenuItem"

export interface Categories{
  idCategory:number,
  strCategory:string,
  strCategoryThumb:string,
  strCategoryDescription:string
}
export interface CategoriesResponse{
  categories:Categories[];
}
function App() {
  const MenuPromiseData = async():Promise<CategoriesResponse> =>{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        return data;
    }
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
              <MenuItem MenuPromiseData = {MenuPromiseData()}></MenuItem>
      </Suspense>
    </>
  )
}

export default App
