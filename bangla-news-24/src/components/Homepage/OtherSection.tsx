import { HeadingTypes } from "@/types/types";
import FirstMainNewsCard from "./FirstMainNewsCard";

const getNews = async () => {
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
        if (!res.ok) {
            throw new Error('Failed to fetch data');

        }
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    } finally {
        console.log('Data fetched  successfully')
    }
}
export default async function OtherSection() {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

    const data = await res.json();
    // const allNews = data.
    console.log('all news', data)
    const selectedNews: HeadingTypes[] = data.data[1].articles;
    const bdNews: HeadingTypes[] = data.data[3].articles;
    const indiaNews: HeadingTypes[] = data.data[5].articles;
    const worldNews: HeadingTypes[] = data.data[6].articles;
    const healthNews: HeadingTypes[] = data.data[7].articles;
    const videoNews: HeadingTypes[] = data.data[8].articles;
    const othersNews: HeadingTypes[] = data.data[9].articles;
    // console.log("Selected news",selectedNews)
    console.log("BD news", bdNews)
    return (
        <div>
            <h1 className="border-b-2 border-red-500 mb-2" >নির্বাচিত খবর</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    selectedNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >বাংলাদেশ</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    bdNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >ভারত</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    indiaNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >বিশ্ব</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    worldNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >স্বাস্থ্য</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    healthNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >ভিডিও</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    videoNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
            <h1 className="border-b-2 border-red-500 mb-2" >অন্যান্য</h1>
            <div className="grid grid-cols-3 gap-3" >

                {
                    othersNews.map((news, idx) =>
                        <FirstMainNewsCard key={idx} news={news} ></FirstMainNewsCard>
                    )
                }
            </div>
        </div>
    )
}