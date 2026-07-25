//Variables that written by using const and let keyword, has block scope.

{
    const a = 2;
    let b = 3;
    // console.log(a , b);
}
// console.log(a , b);//Referenceerror (a,b is not defined)
{
    var a = 2;
    // console.log("Inside block a = ",a);
}
// console.log("Outside block a = ",a);
{
    let b = 2;
    {
        let c = 4;
        {
            let d = 5;
            {
                // console.log(b);
                // console.log(c);
                // console.log(d);
            }
        }
        // console.log(d); //error
    }
}
//variable using var keyword only has function scope.

var name = "Emon";
{
    var name = "Payel";
}
// console.log(name);//Payel

function greet(){
    var age = 20;
    console.log(age);
}
// console.log(age);//referenceError
greet();