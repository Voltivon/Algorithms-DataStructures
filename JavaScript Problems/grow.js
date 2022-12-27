const grow = x => {
  let newVal = 1;
  for(let i = 0; i < x.length; i++) {
    newVal *= x[i];
  }
  return newVal;
}




console.log(grow([1,2,3,4]));
