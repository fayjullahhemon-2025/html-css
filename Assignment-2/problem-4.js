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
console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]));
console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 },{ name: "Pizza Hut", rating: 4.9 }]));
console.log(topRatedRestaurant([{}, {}]));
console.log(topRatedRestaurant([{}]));
console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, {}]));
console.log(topRatedRestaurant([{ name: "Chillox", rating: NaN }, {},{ name: "Sultan's Dine", rating: 4.8 }]));
console.log(topRatedRestaurant([]));
// topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]);