'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const list = <>
    <li>
        <Link href='/' >Home</Link>
    </li>
    <li>
        <Link href='/blogs' >Blogs</Link>
    </li>
    <li><Link href='/docs' >Docs</Link></li>
    <li><Link href='/showcase' >Showcases</Link></li>
    <li><Link href='/About' >About</Link></li>
    <li><Link href='/About/developer' >Developer</Link></li>
</>
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleOpenToggle = () => {
        setOpen(!open);
    }
    return (
        <>
            <div className='flex w-full p-5 justify-between items-center shadow-2xl' >
                <div className='flex sm:hidden' onClick={() => { handleOpenToggle() }} >
                    {
                        open ? <IoCloseOutline />
                            : <RxHamburgerMenu />
                    }
                </div>
                <div>
                    <h1 className='flex justify-center items-center gap-2' ><FaLaptopCode /> Emon Tech</h1>
                </div>
                <div>
                    <ul className='hidden sm:flex justify-center items-center gap-5' >
                        {list}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2' >
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>

            </div>
            {
                open && (
                    <div className='flex sm:hidden justify-center items-center' >
                        <ul className='flex flex-col justify-center items-center' >
                            {list}
                        </ul>
                    </div>
                )
            }
        </>
    )
}