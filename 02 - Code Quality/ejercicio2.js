// function complicatedLevelTwo(array) {
//    var result = array
//       .map((x) => x * 2)
//       .filter((x) => x % 3 === 0)
//       .reduce((acc, curr) => acc + curr, 0);

//    if (result > 1000) {
//       var temp = result;
//       for (var i = 0; i < 10; i++) {
//          temp -= i;
//          temp *= 2;
//       }
//       return temp;
//    } else {
//       var count = 0;
//       while (count < 3) {
//          result += count;
//          count++;
//       }
//       var str = 'The final result is: ' + result;
//       return str;
//    }
// }
function simplifiedLevelTwo(array) {
   const result = array
      .map((x) => x * 2)
      .filter((x) => x % 3 === 0)
      .reduce((acc, curr) => acc + curr, 0);

   if (result > 1000) {
      return (result - 45) * 2;
   } else {
      return 'The final result is: ' + (result + 3);
   }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(simplifiedLevelTwo(array));
