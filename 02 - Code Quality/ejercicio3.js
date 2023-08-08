// function complicatedLevelThree(obj) {
//    let result = '';
//    let keys = Object.keys(obj);
//    let values = Object.values(obj);
//    let sum = values.reduce((acc, curr) => acc + curr, 0);

//    for (let i = 0; i < keys.length; i++) {
//       let key = keys[i];
//       let value = values[i];
//       if (value % 2 === 0) {
//          result += key + ' is even. ';
//       } else {
//          let temp = value;
//          while (temp > 0) {
//             result += key + ', ';
//             temp--;
//          }
//       }
//    }

//    let finalResult = '';
//    let count = 0;
//    while (count < sum) {
//       finalResult += result;
//       count++;
//    }

//    let reversedResult = finalResult.split('').reverse().join('');
//    let formattedResult = reversedResult.toUpperCase();

//    return formattedResult;
// }

// let obj = {
//    a: 2,
//    b: 3,
//    c: 4,
//    d: 5,
// };

function simplifiedLevelThree(obj) {
   let result = '';

   for (let key in obj) {
      let value = obj[key];
      if (value % 2 === 0) {
         result += key + ' is even. ';
      } else {
         result += key + ', '.repeat(value);
      }
   }

   return result.toUpperCase();
}

const obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

console.log(simplifiedLevelThree(obj));
