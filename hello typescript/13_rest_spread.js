"use strict";
const device = {
    name: 'Iphone',
    type: 'Smartphone',
    price: 999,
    color: 'black',
    storage: '128GB'
};
const { name: deviceName, ...deviceInfo } = device;
const number3 = [1, 2, 3, 4, 5];
const newNumbers = [6, 7, 8];
const closeFriends = ['Abdul', 'Alif', 'Afsar'];
const allNumbers = [...number3, ...newNumbers];
console.log(allNumbers);
