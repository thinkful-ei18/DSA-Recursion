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

console.log(triNum(5));

//    * // 1
//   * * // n-1
//  * * * // n -1
// * * * * // n