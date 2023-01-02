function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  let newIndex = arr.findIndex((ele) => ele === num)
  console.log(arr, newIndex)
  return newIndex
}

getIndexToIns([3, 10, 5], 3);
