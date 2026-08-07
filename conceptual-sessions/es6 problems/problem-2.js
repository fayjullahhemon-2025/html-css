const employeeProfileGenerator=(employee)=>{
    if(typeof employee === 'object'){
        const keys = Object.keys(employee);
        if(!keys.includes("name")|| !keys.includes("age")|| !keys.includes("department")){
            return "Invalid";
        }else{
            const {name,age,department}=employee;
            return `My name is ${name}. I am ${age} years old and I am working in ${department}`;
        }
    }else{
        return "Invalid";
    }
}

console.log({name:"Emon",age:26,department:"Software Engineer"});
console.log({name:undefined,age:26,department:"Software Engineer"});
console.log({name:null,age:26,department:"Software Engineer"});