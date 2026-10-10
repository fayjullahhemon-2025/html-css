import { HeadingTypes } from "@/types/types"

interface FirstMainNewsCardType{
    firstNews:HeadingTypes;
}
export default function FirstMainNewsCard({ firstNews }:FirstMainNewsCardType) {
    console.log(firstNews)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read Full Article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}