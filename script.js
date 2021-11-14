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
// const x = 'Andrii';
// function removeChar(str) {
//     let arr = str.split('');
//     arr.splice(-1, 1);
//     arr.splice(0, 1);
//     return arr.join('');
// }
// console.log(removeChar(x));

// const removeChar2 = str => str.slice(1,-1);
// console.log(removeChar2(x));

// const arr = [4, 5, 7, 1, 4, 0];

// function findSmallestInt(args) {
//     let smallest = args[0];
//     for (let i = 0; i < args.length; i++) {
//         if (args[i] < smallest) {
//             smallest = args[i];
//         } else continue;
//     }
//     return smallest;
// }
// console.log(findSmallestInt(arr));

// const numbers = '8 3 -5 42 -1 0 0 -9 4 7 4 -4'; // return "42 -9"

// let smallNum = Infinity;
// let bigNum = -Infinity;
// const split = splitter(numbers);

// function splitter (str) {
//     return str.split(' ');
// }

// for (let i = 0; i < split.length; i ++) {
//     split[i] = Number(split[i]);
//     if (split[i] > bigNum) {bigNum = split[i]}
//     if (split[i] < smallNum) {smallNum = split[i]}
// }
// const result = `${bigNum} ${smallNum}`;
// console.log(result);

// const x = '8 j 8   mBliB8g  imjB8B8  jl  B';
// console.log(x);

// function noSpace(x) {
//     const arr = x.split(' ');
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] !== '') {
//             newArr.push(arr[i]);
//         }
//     console.log(newArr);
//     const str = newArr.join('');
//     console.log(str);
//     return str;
// }
// noSpace(x);

// const numbers = [1, 2, 3];

// function squareSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         // Number(numbers[i]);
//         sum = sum + Math.pow(numbers[i], 2);
//     }
//     return sum;
// }
// console.log(squareSum(numbers));

// const arrayOfSheep = [
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
// ];

// function countSheeps(arrayOfSheep) {
//     arrayOfSheep.forEach(function(item) {
//     if (item == true) {
//         let sheeps += 1;
//       }

// const arr = [true, true, false, true];

// const x = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] == true) {
//             sum += 1;
//         }
//     console.log(sum);
// };
// x(arr);

// const arrayOfSheep = [true, false, true];

// const c = function (arrayOfSheep) {
//     let sum = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++)
//         if (arrayOfSheep[i] == true) {
//             sum += 1;
//         }
//     console.log(sum);
// };
// c(arrayOfSheep);

//  a == false      true,  a != false
// !a == false      true, !a != false
//  a == !a         true,  a != !a

// const number = 1.243567; // precision = 4   result = 1.2435

// Math.roundTo = function (number, precision) {
//     // if (precision === 0) return Math.floor(number);
//     const str = String(number);
//     let arr = str.split('');
//     // if (arr.indexOf('.') == -1) return number;
//     let point = arr.indexOf('.');
//     let roundedArray = [];
//     for (let i = 0; i < arr.length; i++)
//         if (arr.indexOf(arr[i]) <= point + precision) {
//             roundedArray.push(arr[i]);
//         }
//     const x = Number(roundedArray.join(''));
//     return x;
// };
// console.log(Math.roundTo(number, 4));

