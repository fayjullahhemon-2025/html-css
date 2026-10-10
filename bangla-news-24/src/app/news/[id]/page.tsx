// export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import Category from '../../../components/Category/Category'
import FirstMainNewsCard from '@/components/Homepage/FirstMainNewsCard';
import Article from '@/components/Category/Article';
export default async function categoryPage({params}:{params:{id:string}}){
    const {id} = await params;
    console.log(id)
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`)
    const data = await res.json();
    console.log("artcle",data)
    return(
        <div className='max-w-7xl mx-auto my-5' >
            <Article article={data.data} ></Article>
        </div>
    )
}