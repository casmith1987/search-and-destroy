'use strict';

//Complete this algo
const isLoop = (linkedList) => {
  let fastRunner = linkedList.head.next;
  let slowRunner = linkedList.head;

  
  while(fastRunner && slowRunner){
    fastRunner = fastRunner.next;
    if(fastRunner === slowRunner) return true
    fastRunner = fastRunner.next;
    slowRunner = slowRunner.next;
  }

  return false
};

//Rules:
//1. all values in lsit are unique
//2. cannot mutate nodes in list
//

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

const findLoop = (linkedList) => {
  if(!isLoop(linkedList)) return null

  let index = 0;
  const listIndexer = {}
  let runner = linkedList.head;

  while(true){
    if(Object.values(listIndexer).includes(runner)){
      return runner
    }
    listIndexer[index] = runner;
    index++;
    runner = runner.next;
  }
}


module.exports = {
  isLoop,
  findLoop
}

//[1, 2, 3, 4, 5, 6]
//       ^  ^