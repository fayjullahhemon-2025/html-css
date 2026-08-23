interface Booking {
    name: string,
    guests: number,
    time: string
}

function formatBookingConfirmation(booking: Booking): string {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`
}

const booking: Booking = {
    name: "Rahim",
    guests: 2,
    time: "8:30 PM"
}
console.log(formatBookingConfirmation(booking))