function findAverage(array) {
  if (array.length == 0) return 0;
  let average;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (average = sum / array.length);
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
