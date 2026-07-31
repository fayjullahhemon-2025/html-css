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

// Sample Test Cases
console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }])); 
// Output: SULTAN'S DINE

console.log(topRatedRestaurant([{ name: "KFC", rating: 4.2 }, { name: "Pizza Hut", rating: 4.6 }])); 
// Output: PIZZA HUT

console.log(topRatedRestaurant([])); 
// Output: Invalid

console.log(topRatedRestaurant("restaurants")); 
// Output: Invalid

// Hidden & Edge Test Cases (Potential Code Crashers)
// console.log(topRatedRestaurant([{ rating: 4.8 }])); 
// Hidden Danger: Crashes with TypeError: Cannot read properties of undefined (reading 'toUpperCase') if 'name' is missing!
// Expected Output: Invalid

// console.log(topRatedRestaurant([null, { name: "KFC", rating: 4.5 }])); 
// Hidden Danger: Crashes with TypeError when trying to read properties of null
// Expected Output: Invalid

console.log(topRatedRestaurant([{ name: "Tasty Treatment", rating: "4.8" }])); 
// Hidden Danger: String rating instead of number
// Expected Output: Invalid

console.log(topRatedRestaurant([{}, {}])); 
// Output: Invalid
// console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]));
// console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 },{ name: "Pizza Hut", rating: 4.9 }]));
// console.log(topRatedRestaurant([{}, {}]));
// console.log(topRatedRestaurant([{}]));
// console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, {}]));
// console.log(topRatedRestaurant([{ name: "Chillox", rating: NaN }, {},{ name: "Sultan's Dine", rating: 4.8 }]));
// console.log(topRatedRestaurant([]));
// topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]);