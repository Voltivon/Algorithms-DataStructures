function twoSum(nums, target){
    const numToIndexMap = new Map();
    console.log(numToIndexMap);

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        console.log(complement);
        if(numToIndexMap.has(complement)){
            return [numToIndexMap.get(complement), i];
        }

        numToIndexMap.set(nums[i], i);
    }

    return [];
}



console.log(twoSum([2, 7, 11, 15], 9));
