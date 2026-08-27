"use strict";
//---fullfilled --reject
//ktha diye ktha rakhse ->fullfilled
//reject->
//pending
//                request
// [pc(computer)] ---> [server(computer)]
//              \<------/
//                response(api data dibe  eta promise)
//promise er 3 ta state. fullfilled, pendiing,reject(error)
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("I have data!");
    }
    else {
        reject("Some error");
    }
});
// console.log("Pending");
// promise.
// then((data)=>{//then er vitor thake promise houa jinish
//     console.log(data)//data parameter diye resolve acpt kre print krbe
// })
// .catch(err=>{ // catch er vitor thake error data
//     console.log(err)//err parameter error data store kore print korbe
// })
async function getData() {
    try {
        const data = await promise;
        return data;
    }
    catch (error) {
        return error;
    }
}
//# sourceMappingURL=promise.js.map