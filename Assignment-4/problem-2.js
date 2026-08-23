"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatBookingConfirmation(booking) {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
}
const booking = {
    name: "Rahim",
    guests: 2,
    time: "8:30 PM"
};
console.log(formatBookingConfirmation(booking));
//# sourceMappingURL=problem-2.js.map