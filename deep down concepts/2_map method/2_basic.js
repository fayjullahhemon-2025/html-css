const siblings = ["Nasima","Rubina","Sumi","Emon","Payel","Moon"];

const families = siblings.map((name,position,names)=>{
    return {
        name,
        position:position+1,
        babies:{
            name: ["Rattry"],
        },
        siblings
    }
})
console.log(families)