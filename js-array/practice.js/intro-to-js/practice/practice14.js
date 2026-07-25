// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const hasID = true;
const age = 18;

if (age >= 18) {
    if (hasID) {
        console.log("Eligible to vote");
    }
}
else {
    console.log("Not Eligible to vote");
}