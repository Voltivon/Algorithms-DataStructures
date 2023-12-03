

const mergeTwoArrays = function(num1, num2){
    let newArr = num1.concat(num2);
    let sortedArr = newArr.sort((a, b) => a - b);
    let median = 0;
    
    if(sortedArr.length % 2 !== 0){
        median = sortedArr[Math.floor(sortedArr.length / 2)]
    } else {
        let middle1 = sortedArr.length / 2;
        let middle2 = (sortedArr.length / 2) - 1;

        median = (sortedArr[middle1] + sortedArr[middle2]) / 2;
    }

    return median;
}