import Image from "next/image";
import Logo from '../../app/assets/logo-icon.png'

export default function Header1() {
  return (
    <header className="w-full border-b border-gray-200 bg-[#fbfcfb] px-4 py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left Section: Icon, Title, and Date */}
        <div className="flex items-center gap-3">
          {/* Green Icon Box */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008a45] text-white shadow-sm">
            <Image
                src={Logo}
                width={25}
                height={25}
                alt=''
            >
            </Image>
          </div>

          {/* Text Info */}
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-gray-900 leading-tight">
              বাজার দর
            </h1>
            <span className="text-xs text-gray-500">
              মঙ্গলবারে, ৬ অক্টোবর, ২০২৬
            </span>
          </div>
        </div>

        {/* Right Section: User Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gray-200">
            <Image
              src="/user-avatar.jpg" // Replace with your image path or user image prop
              alt="Rezwan"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-800">Rezwan</span>
          {/* <ChevronDown className="h-4 w-4 text-gray-500" /> */}
        </div>
      </div>
    </header>
  );
}