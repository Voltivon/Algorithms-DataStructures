// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.
var twoSum = function(nums, target) {
    
    nums.forEach((num1, i1) => {
        nums.forEach((num2, i2) => {
            if(num1 + num2 === target){
                return [i1, i2];
            }
        })
    })
    
        
};


console.log(twoSum([2,7,11,15], 9));