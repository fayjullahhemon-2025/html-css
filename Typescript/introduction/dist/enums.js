"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.Order Status 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Canceled"] = "CANCELED";
})(OrderStatus || (OrderStatus = {}));
let status = OrderStatus.Delivered;
// console.log(status);
const updateOrder = (status) => {
    if (status === OrderStatus.Shipped) {
        return 'Your order has been shipped!';
    }
    else {
        return `${status}`;
    }
};
// console.log(updateOrder(OrderStatus.Shipped));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Customer"] = 1] = "Customer";
    UserRole[UserRole["Moderator"] = 2] = "Moderator";
})(UserRole || (UserRole = {}));
function checkPermission(role) {
    if (role === UserRole.Admin) {
        console.log('Full Access');
    }
    else if (role === UserRole.Moderator) {
        console.log('Moderate Access');
    }
    else {
        console.log('No access to admin site');
    }
}
// checkPermission(UserRole.Customer)
//Payment status
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Processing"] = 1] = "Processing";
    PaymentStatus[PaymentStatus["Completed"] = 2] = "Completed";
    PaymentStatus[PaymentStatus["Failed"] = 3] = "Failed";
    PaymentStatus[PaymentStatus["Refunded"] = 4] = "Refunded";
})(PaymentStatus || (PaymentStatus = {}));
let payment = (status) => {
    if (status === PaymentStatus.Refunded) {
        console.log('Humra tuchiya banave customer');
    }
    else if (status === PaymentStatus.Failed) {
        console.log('Customer tere aam koi aur kha le.. kire paree tere pe');
    }
    else if (status === PaymentStatus.Pending || status === PaymentStatus.Processing) {
        console.log('Ekbar mil jaye baas');
    }
    else {
        console.log('AAb to paisa hi paisa');
    }
};
// console.log(payment(PaymentStatus.Refunded))
// console.log(payment(PaymentStatus.Processing))
// console.log(payment(PaymentStatus.Failed))
// console.log(payment(PaymentStatus.Pending))
// console.log(payment(PaymentStatus.Completed))
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
console.log(direction.up);
console.log(direction.down);
console.log(direction.left);
console.log(direction.right);
