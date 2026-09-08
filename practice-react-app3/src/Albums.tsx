import { use } from "react";
import AlbumCard from "./AlbumCard";
// interface AlbumProps{
//     userAlbumsPromise: Promise<any>
// }
export default function Albums({userAlbumsPromise}){
    let albums = use(userAlbumsPromise);
    return (
        <div>
            {
                albums.map(album=> <AlbumCard album={album}></AlbumCard> )
            }
        </div>
    )
}