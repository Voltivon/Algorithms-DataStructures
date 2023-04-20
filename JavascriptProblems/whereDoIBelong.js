function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a - b);

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] >= num) {
      sortedArr.splice(i, 0, num);
      break;
    } else if (sortedArr[i] < num) {
      sortedArr.push(num);
    }
  }

  return sortedArr.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
