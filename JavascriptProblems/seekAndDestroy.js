function destroyer(arr) {
  let newArr = Array.from(arguments).slice(1);
  return arr.filter(item => !newArr.includes(item))
}



console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
