// multiply = function (a, b) {
//     return a * b;
//   }

// function even_or_odd(number) {
//     if (number % 2 == 0) {
//       return 'Even';
//     } else {
//       return 'Odd';
//     }
//   }
//   console.log(even_or_odd(176));

// arr = [0, 1, -1, 3, 5, 15, 47, -37, -23];
// arr_1 = [0, 1, -1, 3, 6];

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i =  0; i < arr.length; i++)
//     if (arr[i] >= 0) sum += arr[i];
//   return sum;
// }
// console.log(positiveSum(arr_1));

// function boolToWord( bool ){
//     return bool == true ? 'Yes' : 'No';
//   }

// function opposite(number) {
//     return(-number);
//   }

// function boolToWord(bool) {
//     return (bool === true) ? 'Yes' : 'No';
//  }

// const str = 'komandik';

// function reverse(str) {
//     const Arr = str.split('');
//     const reversedArr = Arr.reverse();
//     const reversedStr = reversedArr.join('');
//     return reversedStr;
// }
// const x = reverse(str);

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }
const x = 'Andrii';
function removeChar(str) {
    let arr = str.split('');
    arr.splice(-1, 1);
    arr.splice(0, 1);
    return arr.join('');
}
console.log(removeChar(x));

const removeChar2 = str => str.slice(1,-1);
console.log(removeChar2(x));