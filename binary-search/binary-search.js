'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//find mid point
	while(array.length){
		let midPoint = Math.floor(array.length / 2)

		// midpoint/2 if right right side: (+ midpoint)

		//compare to target
		if(array[midPoint] === target){
			return true;
		} else if (target < array[midPoint]){
			array = array.slice(0, midPoint)
		} else if (target > array[midPoint]){
			array = array.slice(midPoint+1)
		}
		console.log(array)
	}
	return false
};

//Rules:
//1. Array will be sorted
//2. should run in O(log(n))

//Method:
//1. Find mid point of array
//2. Check if target is > || < || = midpoint
//3. get rid (array.slice()) of unapplicable half.
//4. keep going until midpoint = target
// or we run out array elements (does not exist in array)


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch