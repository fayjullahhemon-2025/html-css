import { HeadingTypes } from "@/types/types";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const marqueeData = async () => {
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        throw new Error(`HTTP error! `);
    } finally {
        console.log('marquee data fetched successfully');
    }
}

export default async function Marquee() {
    const marquee = await marqueeData();
    const headlines:HeadingTypes[] = marquee.data;
    console.log(marquee);
    return (
        <div className="bg-red-600 text-white 
        " >
            <div className="max-w-7xl mx-auto  flex items-center" >
                <span className='py-1 px-2'>সর্বশেষ</span>
                <MarqueeText
                    duration={10}
                    pauseOnHover={true}
                    direction="right"
                >
                    {
                        headlines.map(headings =>
                            <span className="mx-1" key={headings.id} > •{headings.title}</span>
                        )
                    }
                </MarqueeText>
            </div>
        </div>
    )
}