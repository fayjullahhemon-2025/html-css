import bannerImg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'
export default function Banner(){
    return (
        <div className="bg-cover bg-center min-h-100 w-270 bg-black m-auto my-3.5 rounded-2xl flex justify-center items-center gap-1.5 flex-col" 
      style={{ backgroundImage: `url(${bannerImg})` }} >
            <img className="w-37.5" src={banner} alt="" />
            <h3 className="text-white text-3xl">Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p className="text-gray-400 text-[18px]">Beyond Boundaries Beyond Limits</p>
            <button className="rounded-xl text-black font-bold p-0.5 bg-[#d8ed28] h-10 w-35 border-2 border-black outline-2 outline-[#d8ed28]" >Claim Free Credit</button>
        </div>
    )
}