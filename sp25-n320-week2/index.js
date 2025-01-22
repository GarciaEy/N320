const mathFuncs = require("./functions");

const { calcTriArea } = mathFuncs;

const ans1 = calcTriArea({ base: 3, height: 7 });
console.log(ans1); //output: 10.5

const ans2 = calcTriArea({ base: 2 });
console.log(ans2); //output: 1

const ans3 = calcTriArea();
console.log(ans3); //output: .5

// console.log(calcTriArea({}));

// console.log(
//   calcTriArea({
//     base: 2,
//   })
// );
