"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (w) => {
    if (w === 'sunny') {
        return "Wear sunscreen";
    }
    else if (w === 'rainy') {
        return "Carry an umbrella";
    }
    else {
        return "Bring a light jacket";
    }
};
console.log(getWeatherAdvice('sunny'));
