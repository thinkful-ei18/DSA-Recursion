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

// STACK OVERFLOW SOLUTION
// function stringSplitter(str, separator) {
//   if (!str.includes(separator)) {
//     return [str];
//   }

//   let index = str.indexOf(separator);
//   return [
//     str.substring(0, index) === '' ? null : str.substring(0, index),
//     ...stringSplitter(str.slice(index + 1), separator)
//   ];
// }

// console.log(stringSplitter('ali  capi  christina', ' '));

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

// console.log(stringSplitter('hello there capi yay', ' '));

let binaryRepresentation = num => {
  if (num >= 1) {
    return binaryRepresentation(Math.floor(num / 2)) + num % 2;
  }
  return '';
};
// console.log(binaryRepresentation(5));

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(4));







function anagram(str, r = []) {
  // [str[0], str.slice(0, 0) + str.slice(1)], // [e, ast]
  // [str[1], str.slice(0, 1) + str.slice(2)], // [a, est] 
  // [str[2], str.slice(0, 2) + str.slice(3)], // [s, eat]
  // [str[3], str.slice(0, 3) + str.slice(4)], // [t, eas]
  console.log(str);
  if (str.length === 2) {
    return [
      str[0] + str[1],
      str[1] + str[0]
    ];
  }
  for (let i = 0; i < str.length; i++) {
    console.log(str);
    let anagrams = anagram(str.slice(0, i) + str.slice(i + 1));

    for (let j = 0; i < anagrams.length; j++) {
      r.push(str[i] + anagrams[j]);
    }
  }
  console.log(r);
  return r;

}

console.log(anagram('est'));

// east, eats, esat, esta, etas, and etsa
// console.log('east'.slice(4));