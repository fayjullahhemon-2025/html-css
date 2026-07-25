// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
// ১৮.৫ এর নিচে: স্বাভাবিকের চেয়ে ওজন কম (Underweight)
// ১৮.৫ থেকে ২৪.৯: স্বাভাবিক ওজন (Normal weight)
// ২৫.০ থেকে ২৯.৯: অতিরিক্ত ওজন (Overweight)
// ৩০ বা তার বেশি: স্থূল বা অতিরিক্ত মোটা (Obese)

const bmi = 18.95;
if(bmi < 18.5){
    console.log("Underweight");
}
else if(bmi >= 18.5 && bmi <25){
    console.log("Normal Weight");
}
else if(bmi >=25 && bmi <=29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}