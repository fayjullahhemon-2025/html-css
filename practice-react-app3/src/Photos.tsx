import { use } from "react";
import AlbumCard from "./AlbumCard";
import PhotoCard from "./PhotoCard";

export default function Photos({userPothosPromise}){
    let photos = use(userPothosPromise)
    return(
        <div>
            {
                photos.map(photo => <PhotoCard photo = {photo}></PhotoCard> )
            }
        </div>
    )
}