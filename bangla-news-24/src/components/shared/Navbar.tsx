import { NavType } from "@/types/types";
import Link from "next/link";

const navlinks = async () => {
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/categories');
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();

    } catch (error) {
        throw new Error(`Failed to fetch nav data`);
    } finally {
        console.log('fetched nav data successfull')
    }
}

export default async function Navbar() {
    const navItems = await navlinks();
    console.log(navItems.data)
    const navLinks:NavType[] = navItems.data;
    return (
        <nav className="w-full bg-white px-4 py-3">
            <ul className="flex items-center gap-6 overflow-x-auto whitespace-nowrap">
                <li>
                    <Link href='/' className="text-base font-medium text-gray-700 transition-colors hover:text-red-600" >হোম</Link>
                </li>
                {navItems.data.filter((item:NavType) => item.scrapable).map((item:NavType, idx:number) => (
                    <li key={idx}>
                        <Link
                            href={item.slug}
                            className="text-base font-medium text-gray-700 transition-colors hover:text-red-600"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
