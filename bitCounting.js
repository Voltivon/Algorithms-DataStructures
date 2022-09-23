// Bit Counting

var countBits = function (n) {
  const binary = n.toString(2);
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    console.log(binary[i]);
    if (binary[i] == 1) {
      result += 1;
    }
  }

  return result;
};
