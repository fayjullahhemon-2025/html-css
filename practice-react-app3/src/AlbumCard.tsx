export default function AlbumCard({album}){
    return(
        <div>
            <h2>ID: {album.id} </h2>
            <p>Title: {album.title}</p>
        </div>
    )
}