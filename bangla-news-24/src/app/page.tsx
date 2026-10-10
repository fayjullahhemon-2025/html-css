import MainNewsSection from "@/components/Homepage/MainNewsSection";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className=" w-full max-w-7xl mx-auto" >
      <div className="grid grid-cols-3" >
        <div className="col-span-2 " >
          <Suspense>
            <MainNewsSection></MainNewsSection>
          </Suspense>
        </div>
        <div className="col-span-1 bg-green-400 p-10"></div>
      </div>
    </div>
  );
}
