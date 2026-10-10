import { HeadingTypes } from "@/types/types";
import FirstMainNewsCard from "./FirstMainNewsCard";
import Link from "next/link";

const getNews = async () => {
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
        if (!res.ok) {
            throw new Error('Error');
        }
        return res.json();
    } catch (error) {
        throw new Error('Error');
    } finally {
        // console.log('most readed news data fetched successfully');
    }
}

export default async function MostReadSection() {
    const mostReadedNews = await getNews();
    const news: HeadingTypes[] = mostReadedNews.data
    // console.log('most readed mews',news)
    return (
        <div>
            <h1 className="card-title" >সর্বাধিক পঠিত</h1>
            <ol>
                {
                    news.map((news, idx) =>
                        <li key={idx} className="font-bold text-lg hover:text-red-800 my-1">
                            <span className="text-red-500" >{idx + 1}</span> . <Link href='#' >{news.title}</Link>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}
