import MainNewsSection from "@/components/Homepage/MainNewsSection";
import MostReadSection from "@/components/Homepage/MostReadSection";
import OtherSection from "@/components/Homepage/OtherSection";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div className=" w-full max-w-7xl mx-auto" >
      <div className="grid grid-cols-3" >
        <div className="col-span-2 " >
          <Suspense>
            <MainNewsSection></MainNewsSection>
          </Suspense>
          <Suspense>
            <OtherSection></OtherSection>
          </Suspense>

        </div>
        <div className="col-span-1 p-10">
          <Suspense>
            <MostReadSection></MostReadSection>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
