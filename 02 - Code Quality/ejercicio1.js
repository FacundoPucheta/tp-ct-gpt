// function complicatedLevelOne(arr) {
//    var result = 0;

//    for (var i = 0; i < arr.length; i++) {
//       result += arr[i];
//    }

//    if (arr[i] % 2 === 0) {
//       result *= i;
//    } else {
//       result -= i;
//    }

//    return result;
// }

function calculateResult(arr) {
   let result = 0;

   for (const element of arr) {
      result += element;
      console.log(result)
      if (element % 2 === 0) {
         result *= element;
      } else {
         result -= element;
      }
      console.log(result)
   }

   return result;
}


console.log(calculateResult([3, 5, 2, 6, 3, 5]));


