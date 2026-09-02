function describeValue(any){
    if(typeof any === 'string'){
        if(any){
            return `${typeof any} | truthy`;
        }else{
            return `${typeof any} | falsy`;
        }
    }else if(typeof any === 'boolean'){
        if(any){
            return `${typeof any} | truthy`;
        }else{
            return `${typeof any} | falsy`;
        }
    }else if(typeof any === 'number'){
        if(any){
            return `${typeof any} | truthy`;
        }else{
            return `${typeof any} | falsy`;
        }
    }else if(typeof any === 'undefined'){
        if(any){
            return `${typeof any} | truthy`;
        }else{
            return `${typeof any} | falsy`;
        }
    }else if(typeof any === 'object'){
        if(any){
            return `${typeof any} | truthy`;
        }else{
            return `${typeof any} | falsy`;
        }
    }
}
// console.log(describeValue(""));
// console.log(describeValue("hello"));
// console.log(describeValue(true));
// console.log(describeValue(false));
// console.log(describeValue(1));
// console.log(describeValue(undefined));
// console.log(describeValue(null));
console.log(describeValue("0"));
console.log(describeValue(NaN));