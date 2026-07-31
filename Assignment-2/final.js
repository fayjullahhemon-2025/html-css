// Problem 1 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals === 'number' && typeof teamBGoals === 'number' && teamAGoals >= 0 && teamBGoals >= 0 && teamAGoals % 1 === 0 && teamBGoals % 1 === 0) {
        /**  check kortese parameter number kina, number 0 theke boro kina, number ki integer kina. cz goal number kokhono fraction hobe na.*/
        if (teamAGoals > teamBGoals) {
            return "Team A Won";
        } else if (teamAGoals < teamBGoals) {
            return "Team B Won";
        } else {
            return "Draw";
        }
    } else {
        return "Invalid";
    }
}
// Problem 2 — Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if (Array.isArray(weights)) {
        let sum = 0;
        for (const weight of weights) {
            if (typeof weight === 'number' && weight >= 0 && !Number.isNaN(weight)) {
                /** weight ki number kina, 0 ba tar boro kina, NaN kina check korechi */
                sum = sum + weight;
            } else {
                return "Invalid";
            }
        }
        if (sum <= 400) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid";
    }
}
// Problem 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed === 'number' && tokensUsed >= 0 && !Number.isNaN(tokensUsed) && tokensUsed !== Infinity) {
        if (tokensUsed > 500) {
            tokensUsed = tokensUsed - 500;
            return Math.floor((tokensUsed / 100)) * 5;
        } else {
            return 0;
        }
    } else {
        return "Invalid";
    }
}

// Problem 4 — Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {

    if (Array.isArray(restaurants) && restaurants.length !== 0) {
        let count = 0;
        for (let i = 0; i < restaurants.length; i++) {
            let keys = Object.keys(restaurants[i]);
            if (keys.length === 0) {
                count++;
            }
        }
        if (restaurants.length !== count) {
            let rate = -Infinity;
            for (const o of restaurants) {

                if (o.rating > rate) {
                    rate = o.rating;
                }
            }
            for (const o of restaurants) {
                if (o.rating === rate) {
                    return o.name.toUpperCase();
                }
            }
        } else {
            return "Invalid";
        }
    } else {
        return "Invalid";
    }
}
// Problem 5 —Debugging Challenge: API Response Time Monitor
function averageResponseTime(times) {
    if (Array.isArray(times) === false) { //fix
        return "Invalid";
    }

    if (times.length === 0) {// fix
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] === 'number' && !Number.isNaN(times[i])) { //fix
            total = total + times[i]; //fix
        } else {
            return "Invalid";
        }
    }
    return (total / times.length); //fix
}