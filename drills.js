'use strict';

function countingSheep(num) {
  if (num < 1) {
    return;
  }
  console.log(num + '- Another sheep jumps over the fence');
  countingSheep(num - 1);
}
// countingSheep(3);

function arrayDouble(arr) {
  if (arr.length < 1) {
    return [];
  }
  return [arr[0] * 2, ...arrayDouble(arr.slice(1))];
}
// console.log(arrayDouble([1,2,3]));

function reverseString(str) {
  if (str.length < 1) {
    return '';
  }

  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// console.log(reverseString('hello'));

function triNum(n) {
  if (n === 0) {
    return 0;
  }
  return n + triNum(n - 1);
}

// console.log(triNum(5));

//    * // 1
//   * * // n-1
//  * * * // n -1
// * * * * // n

// function stringSplitter(str, sep, newArray) {
//   if (str.length < 1) {
//     return [];
//   }

//   if (str[0] === sep) {
//     return [str.slice(1)];
//   }

//   // 'hello there', ' '
//   if (str[0] !== sep) {
//     return stringSplitter(str.slice(1), sep, newArray);
//   }
// }

// console.log(stringSplitter('hello there', ' ', []));
// // ['hello', 'there']



function stringSplitter(str, sep, chars = [], words = []) {

  if (str.length < 1) {
    let word = chars.join('');
    return words.concat(word);
  }

  if (str[0] === sep) {
    let word = chars.join('');
    return stringSplitter(str.slice(1), sep, [], words.concat(word));
  }

  if (str[0] !== sep) {
    return stringSplitter(str.slice(1), sep, chars.concat(str[0]), words);
  }
}

console.log(stringSplitter('hello there capi yay', ' '));