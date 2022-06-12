// exports = module.exports = {}; (隱藏)

let speed = 100;
let brand = "Ford";
let color = "RED";
function run() {
  console.log("I am running at " + speed);
}

// 盡量不要這樣寫
// module.exports.name = 'Test';

// 沒有匯出 speed，把外不需要的資料「封裝」起來 （物件寫法）
module.exports = {
  brand,
  color,
  run,
};

// return module.exports;(隱藏)
