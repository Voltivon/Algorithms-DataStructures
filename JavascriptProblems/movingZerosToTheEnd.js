function movingZerosToEnd(arr) {
  let zerosCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[i - zerosCount] = arr[i];
    } else {
      zerosCount++;
    }
  }
  for (let i = arr.length - 1; i >= arr.length - zerosCount; i--) {
    arr[i] = 0;
  }

  return arr;
}
