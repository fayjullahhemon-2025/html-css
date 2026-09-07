/**
 * 1.Data source || JSON
 * JSON.stringify()
 * JSON.parse()
 * .json()
 * 
 */

//callback
fetch('https://jsonplaceholder.typicode.com/users');
.then((res)=>res.json())
.then((data)=>{console.log(data)})

//async await
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}
//arrow function

const loadData2 = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
}