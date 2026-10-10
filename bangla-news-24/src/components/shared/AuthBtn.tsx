'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function AuthBtn(){
    const { data: session } =  useSession();
    console.log(session)
    return(
        <>
            {
                session?.user ?
                    <>
                        <span>{session?.user?.name}</span>
                        <button className='btn btn-error' onClick={()=>signOut()} >সাইন আউট</button>
                    </>
                    : 
                    <>
                        <button className="rounded-md px-3 py-2 text-sm text-gray-700 hover:text-red-600">
                            <Link href='/sign-in' >সাইন ইন</Link>
                        </button>

                        <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                            <Link href='/sign-up' >সাইন আপ</Link>
                        </button>
                    </>
            }
        </>
    )
}