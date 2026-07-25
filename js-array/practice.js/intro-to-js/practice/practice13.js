// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
const month =2.5;
if(month >=1 && month <=2.4 || month <=12.5 && month >=12.9){
    console.log("Winter");
}
else if(month >=6.5 && month <=8.4){
    console.log("Monsoon");
}
else if(month >=4.5 && month <=6.4){
    console.log("Monsoon");
}
else if(month >=8.5 && month <=10.4){
    console.log("Autumn");
}
else if(month >=10.5 && month <=12.4){
    console.log("Late Autumn");
}
else {
    console.log("Spring");
}