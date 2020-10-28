'use strict';

// Complete this algo
const minJumps = (arr) => {
  if (arr[0] > arr.length) return 1;
  let currentIndex = 0;
  let jumps = 0;
  while (currentIndex <= arr.length) {
    //getting possible next jumps
    if (arr[currentIndex] >= arr.slice(currentIndex).length - 1) {
      jumps++;
      break;
    }
    let possibleJumps = arr.slice(
      currentIndex + 1,
      currentIndex + arr[currentIndex] + 1
    );
    currentIndex = currentIndex + 1 + findBestJump(possibleJumps);
    jumps++;
  }
  return jumps;
};

const findBestJump = (arr) => {
  let max = 0;
  let indexOf = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] + i;
    if (temp > max) {
      max = temp;
      indexOf = i;
    }
  }
  return indexOf;
};

module.exports = minJumps;
