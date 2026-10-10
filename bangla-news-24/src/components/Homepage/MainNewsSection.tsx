import { HeadingTypes } from "@/types/types";
import FirstMainNewsCard from "./FirstMainNewsCard";

const mainNews = async () => {
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
        if (!res.ok) {
            throw new Error(`Http Error Status ${res.status}`)
        }
        return res.json();
    } catch (error) {
        throw new Error(`Http Error `)
    } finally {
        console.log('News fetched successfully');
    }
}

export default async function MainNewsSection() {
    const news = await mainNews();
    const allNews:HeadingTypes[] = news.data[0].articles;
    const [firstNews, ...otherNews] = allNews
    // console.log(news.data[0].articles)
    // console.log(firstNews)
    // console.log(otherNews)
    return (
        <div className="flex justify-between items-start gap-1.5 my-5" >
            <div>
                <FirstMainNewsCard firstNews={firstNews} ></FirstMainNewsCard>
            </div>
            <div className="flex flex-col justify-center px-5 py-5" >

                {
                    otherNews.slice(1, 5).map((on, idx) =>
                        <div key={idx} className="flex flex-col border-gray-200 rounded-2xl" >
                            <span className="text-red-600 font-extraboldbold" >প্রধান খবর</span>
                            <span
                                
                                className="
                        py-2 
                        border-gray-200 rounded-2xl

                        font-bold
                    "

                            >{on.title}</span>
                        </div>)
                }
            </div>
        </div>
    )
}