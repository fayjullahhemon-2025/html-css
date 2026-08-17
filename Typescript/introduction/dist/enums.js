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
console.log(status);
