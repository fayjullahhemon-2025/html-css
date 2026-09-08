export default function PhotoCard({photo}){
    return (
        <div>
            <h3>Title: {photo.title} </h3>
            <img src={photo.download_url} alt="" width={300} height = {300} />
        </div>
    )
}