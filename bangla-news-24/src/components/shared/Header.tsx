// 'use client'
import Logo from '@/app/assets/logo.png'
import Image from 'next/image'
import DateComponent from './Date'
import Navbar from './Navbar'
import { Suspense } from 'react'
import Marquee from './marquee'
import { signOut, useSession } from '@/lib/auth-client'
import AuthBtn from './AuthBtn'

export default async function Header() {

    // const { data: session } = await useSession();
    // console.log(session)
    const auth_links = 
        <AuthBtn></AuthBtn>
    

    return (
        <header className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4">
                {/* Top section */}
                <div className="flex items-center justify-between py-4">
                    {/* Logo and title */}
                    <div className="flex items-center  gap-2 ">
                        <Image
                            src={Logo}
                            width={40}
                            height={40}
                            alt="Bangla News logo"
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-2xl font-bold leading-tight text-red-600">
                                Bangla News 24
                            </h1>

                            <div className="text-xs text-gray-600">
                                <DateComponent />
                            </div>
                        </div>
                    </div>

                    {/* Auth buttons */}
                    <div className="flex items-center gap-3">
                        {auth_links}
                    </div>
                </div>

                {/* Navbar */}
                <div className="flex justify-center pb-3 ">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Navbar />
                    </Suspense>
                </div>
            </div>
            <Suspense fallback={<div>Loading..</div>} >
                <Marquee></Marquee>
            </Suspense>
        </header>
    )
}