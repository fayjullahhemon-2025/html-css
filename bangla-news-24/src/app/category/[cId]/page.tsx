// export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import Category from '../../../components/Category/Category'
export default async function categoryPage({params}:{params:{cId:string}}){
    const {cId} = await params;
    
    return(
        <div className='max-w-7xl mx-auto my-5' >
            <Suspense>
                <Category cId={cId} ></Category>
            </Suspense>
        </div>
    )
}