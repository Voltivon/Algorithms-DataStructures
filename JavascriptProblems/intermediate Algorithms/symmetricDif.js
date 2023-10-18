function diff(arr1, arr2) {
  return [
    ...arr1.filter((x) => !arr2.includes(x)),
    ...arr2.filter((x) => !arr1.includes(x)),
  ];
}

function sym(...args) {
  return [...new Set(args.reduce(diff))];
}

sym([1, 2, 3], [5, 2, 1, 4]);
