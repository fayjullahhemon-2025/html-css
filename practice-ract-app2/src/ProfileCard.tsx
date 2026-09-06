export default function ProfileCard({name,age,hobby}:{name:string,age:number,hobby:string}){
    let today = new Date()
    let currentYear = today.getFullYear();
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
            <p>Birth Year: {currentYear-age}</p>
        </div>
    )

}