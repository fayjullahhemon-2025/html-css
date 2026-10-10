import { HeadingTypes } from "@/types/types";
import FirstMainNewsCard from "../Homepage/FirstMainNewsCard";

const getCategory = async(id:string)=>{
    try{
        const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
        if(!res.ok){
            throw new Error('dhuru')
        }
        return res.json();
    }catch(error){
        throw new Error('dhuru')
    }
}

export default async function Category({cId}:{cId:string}){
    const id = cId;
    const category = await getCategory(id);
    console.log("herro",category)
    const categoryData:HeadingTypes[] = category.data
    return(
        <div className="grid grid-cols-3 gap-4" >
            {
                categoryData.map(news=>
                    <FirstMainNewsCard key={news.id} news = {news} ></FirstMainNewsCard>
                )
            }
        </div>
    )
}
