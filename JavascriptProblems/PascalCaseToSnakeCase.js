function toUnderscore(str) {
  if (typeof str === "number") {
    return str.toString();
  }

  let snakeCase = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "A" && char <= "Z") {
      if (i > 0 && str[i - 1] !== "_") {
        snakeCase += "_";
      }
      snakeCase += char.toLowerCase();
    } else {
      snakeCase += char;
    }
  }
  return snakeCase;
}
