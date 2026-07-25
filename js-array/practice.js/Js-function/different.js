function chowdhurify(name){
    const fullName = name + " Chowdhury";
    return fullName;
}
const robinChow = chowdhurify('Robin');
// console.log(robinChow);
const shammiChow = chowdhurify('Shammi');
// console.log(shammiChow);

function fullName(firstName, lastName){
    const fullName = firstName +" "+ lastName;
    return fullName;
}

const mohabbat = fullName('Mohabbat','Ali');
// console.log(mohabbat);

function doubleOrHalf(price, isDouble){
    if(isDouble){
        const askingPrice = price*2;
        return askingPrice;
    }
    else{
        const askingPrice = price /2;
        return askingPrice ;
    }
}
const myPrice = doubleOrHalf(100,true);
// console.log("Price for Mango People ", myPrice  );
const leaderPrice = doubleOrHalf(100,false);
// console.log('Price for leader ',leaderPrice);

function firstElementDouble(array){
    console.log('got the parameter value',array);
    const firstElement = array[0];
    const doubled = firstElement * 2;
    return doubled;
}
const numbers = [1,2,3,4,5,6,7];
const doubled = firstElementDouble(numbers);
// console.log('double of the first element',doubled);//2

const student = {
    name : 'Monir Abdul',
    id : 15,
    marks: 75
}
function isStudentAPlus(student){
    console.log('Got the student', student);
    const marks = student.marks;
    console.log('His marks: ',marks);
    if(marks>=80){
        return "A+";
    }else{
        return "Not A+";
    }
}
const isAPlus = isStudentAPlus(student);
console.log(isAPlus);