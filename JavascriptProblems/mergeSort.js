
function mergeSort(array){
    if(array.length <= 1) return array;  //base case

    const middle = Math.floor(array.length / 2); // gets the middle of the array
    const leftArr = array.slice(0, middle); // gets left side of the array
    const rightArr = array.slice(middle); // gets right side of the array

    return merge(mergeSort(leftArr), mergeSort(rightArr)); // returns merge function whichs calls the mergeSort fucntion with the left and right arrays

}


function merge(left, right){
    const array = []; // initalize empty array
    
    while(left.length && right.length){   // checks if boths sides have a length
        if(left[0] < right[0]){ 
            array.push(left.shift())   // if left side is less than right side push the first element of the left array
        } else {
            array.push(right.shift())  // if right side is less than left side push the first element of the right array
        }
    }

    return array.concat(left.slice()).concat(right.slice());  // add the left array to the right array
}

console.log(mergeSort([8,5,2,6,1,3,4]));
