function twoNumberSum(array, targetSum) {
    // Write your code here.

    array.sort((a, b) => a - b); //sort the array in ascending order
    //for(let i=0; i < array.length-1; i++){
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        currentSum = array[left] + array[right];
        if (currentSum === targetSum) return [array[left], array[right]];

        else if (currentSum < targetSum) left++;
        else if (currentSum > targetSum) right--;

        //}
    }
    return [];
}


// nums = {};
// for (num of array){
// 	complement = targetSum - num;
// 	if(complement in nums) return [complement, num];
// 	else nums[num] = true;
// 	}
// 	return [];
// }