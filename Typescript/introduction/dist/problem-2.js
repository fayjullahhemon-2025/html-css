"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticket = {
    name: "Nabila",
    movie: "Interstellar",
    time: "9:15PM"
};
const formatTicketConfirmation = (ticket) => {
    return `${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time}`;
};
console.log(formatTicketConfirmation(ticket));
