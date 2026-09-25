import Image from 'next/image'
import React from 'react'
import banner from '@/assets/hero_img.jpg'
export default function Banner() {
    return (
        <section className=' py-10' >

            <div className=' bg-slate-300 p-10 rounded-2xl container m-auto grid grid-cols-2 gap-4 items-center' >
                <div >
                    <h2 className='text-5xl my-5'>Books to freshen up <br /> your bookshelf</h2>
                    <button className='bg-green-500 text-white p-2 rounded-lg cursor-pointer'>
                        View The List
                    </button>
                </div>
                <div  >
                    <Image
                        src={banner}
                        alt='banner.png'
                        className='rounded-tr-2xl rounded-br-2xl'
                    />
                </div>
            </div>
        </section>
    )
}