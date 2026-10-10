import { HeadingTypes } from "@/types/types"

interface FirstMainNewsCardType {
    news: HeadingTypes;
}
export default function FirstMainNewsCard({ news }: FirstMainNewsCardType) {
    // console.log(news)
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-sm mx-auto overflow-hidden">
                <figure className="relative aspect-video w-full">
                    <img
                        src={news?.imageUrl}
                        alt={news?.imageAlt || news?.title}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body p-4 sm:p-6">
                    <h3 className="font-bold text-red-800 text-xs sm:text-sm">{news?.category}</h3>
                    <h2 className="card-title text-base sm:text-xl font-bold leading-snug">{news?.title}</h2>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{news?.description}</p>
                    <div className="card-actions justify-end mt-2">
                        <button className="btn btn-primary btn-sm sm:btn-md">Read Full Article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}