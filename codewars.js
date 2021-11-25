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

// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     let sum = 0;
//     marks.forEach(function (item) {
//       sum += item;
//     });
//     return Math.trunc(sum / marks.length);
//   }

// const arr = ['+', 3, 2];
// const arr1 = ['-', 4, 3];
// const arr3 = ['*', 2, 8];
// const arr4 = ['/', 14, 7];

// function basicOp(operation, value1, value2) {
//     if (operation == '+') {
//         return value1 + value2;
//     }
//     if (operation == '-') {
//         return value1 - value2;
//     }
//     if (operation == '*') {
//         return value1 * value2;
//     }
//     if (operation == '/') {
//         return value1 / value2;
//     }
// }

// console.log(basicOp(arr[0], arr[1], arr[2]));

// const n = 35231;

// function digitize(n) {
//     const str = String(n);
//     const arr = str.split('');
//     arrRev = arr.reverse(arr);
//     return arrRev.map(Number);
// }

// console.log(digitize(n));

// function digitizer(n) {
//     return String(n).split('').map(Number).reverse();
// }

// console.log(digitizer(n));

// const arr = [-1,1,2,3,4,5,6,7,8,9];

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//       }
//     }
//     return null
//   }
// console.log(firstNonConsecutive(arr));

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function invert(array) {
    let res = [];
    array.forEach((item) => {
        res.push(-item);
    });
    return res;
}

function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let sum = 0;
    arr.forEach((item) => {
        sum = item + sum;
    });
    return sum;
}

function betterThanAverage(classPoints, yourPoints) {
    return Boolean(
        (classPoints.reduce((a, b) => a + b) + yourPoints) /
            (classPoints.length + 1) <
            yourPoints
    );
}

function betterThanAverage(classPoints, yourPoints) {
    return (
        yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length
    );
}

function squareArea(A) {
    return Math.round(Math.pow((2 * A) / Math.PI, 2) * 100) / 100;
}

const areaOrPerimeter = function (l, w) {
    return l == w ? l * w : 2 * (l + w);
};

function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case 'terrible':
            return 0;
        case 'poor':
            return Math.ceil(amount * 0.05);
        case 'good':
            return Math.ceil(amount * 0.1);
        case 'great':
            return Math.ceil(amount * 0.15);
        case 'excellent':
            return Math.ceil(amount * 0.2);
        default:
            return 'Rating not recognised';
    }
}

const TIPS = {
    terrible: 0.0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
};

const calculateTip3 = (amount, rating) => {
    rating = rating.toLowerCase();

    return rating in TIPS
        ? Math.ceil(TIPS[rating] * amount)
        : 'Rating not recognised';
};

function between(a, b) {
    let arr = [];
    for (i = a; i <= b; i++) arr.push(i);
    return arr;
}

function stringy(size) {
    if (size % 2) {
        const quantity = (size - 1) / 2;
        let str = '';
        for (i = 0; i < quantity; i++) {
            str = str + '10';
        }
        return str + '1';
        //
    } else {
        let str = '';
        for (i = 0; i < size / 2; i++) {
            str = str + '10';
        }
        return str;
    }
}
stringy(5);

function stringy(size) {
    var str = '';
    for (var i = 1; i <= size; i++) str += i % 2;
    return str;
}

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
    const arr = string.split('');
    let newArr = [];

    arr.forEach((item) => {
        switch (item) {
            case '5':
                newArr.push('s');
                break;

            case '0':
                newArr.push('o');
                break;

            case '1':
                newArr.push('i');
                break;

            default:
                newArr.push(item);
                break;
        }
    });

    return newArr.join('').toUpperCase();
}
correct('LOND0N');

const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct2 = string => (
    string.replace(/[501]/g, character => corrections[character])
  );




function formatMoney(amount){
    const doll = Math.trunc(amount);
    if (doll < amount && (amount - doll) < 0.11) {         // number was decemal
        const dec0x = Math.round((amount - doll) * 100);
        return `\$${doll}.0${dec0x}`;
    } else if (doll < amount && (amount - doll) > 0.1 ) {
        const decxx = Math.round((amount - doll) * 100);
        return `\$${doll}.${decxx}`;
    } else  {                                       // number is int
        return `\$${amount}.00`; 
    }
}
console.log(formatMoney(227.02));


/********************it dont work*********************/
//
// 
// 
// Expected: '$477.34', instead got: '$477.33'

// Testing 477.34

// Testing 212.54
// Testing 21.83
// Testing 444.53
// Testing 933.4
// Testing 75.52
// Testing 49.9
// Testing 1089.3
// Testing 452.9
// Testing 1287.8
// Testing 509.7
// Testing 78.6


/********************it works************************/
// Testing 619.7
// Testing 700.11
// Testing 26.44
// Testing 477.34