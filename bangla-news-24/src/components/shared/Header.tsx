
import Logo from '@/app/assets/logo.png'
import Image from 'next/image'
import DateComponent from './Date'
import Navbar from './Navbar'

export default function Header() {


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
                        <button className="rounded-md px-3 py-2 text-sm text-gray-700 hover:text-red-600">
                            সাইন ইন
                        </button>

                        <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                            সাইন আপ
                        </button>
                    </div>
                </div>

                {/* Navbar */}
                <div className="flex justify-center pb-3 ">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}