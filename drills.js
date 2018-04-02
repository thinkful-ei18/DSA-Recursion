'use strict';

function countingSheep(num) {
  if (num < 1) {
    return;
  }
  console.log(num + '- Another sheep jumps over the fence');
  countingSheep(num - 1);
}
countingSheep(3);

function arrayDouble(arr) {
  if (arr.length < 1) {
    return [];
  }
  console.log(arr);
  arr[0] * 2;
  return arrayDouble([arr[0], ...arr.slice(1)]);

  [arr[0], ...filter(arr.slice(1), predicate)];
}
arrayDouble([1, 2, 3]);
