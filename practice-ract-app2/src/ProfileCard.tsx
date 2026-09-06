export default function ProfileCard({name,age,hobby}:{name:string,age:number,hobby:string}){
    
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )

}