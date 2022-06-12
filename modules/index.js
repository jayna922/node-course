// 方法1: 引用整個物件
// let car = require('./car');

// console.log(car);

// // { brand: 'Ford', color: 'RED', run: [Function (anonymous)] }

// console.log(car.brand);
// car.run();

// 方法2: 只引用需要的
// let { brand } = require('./car');
// console.log(brand);


// 測試順序
//(在first.js上面還有引用一個second.js,他會有一個隱藏的判斷式來檢查是否已經跑過？ 所以second會先跑first且不會跑第二次second)
const first = require('./first');
const second = require('./second');