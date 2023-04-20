function toCamelCase(str) {
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    let newStr = str
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, " ")
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
      .join(" ");

    return newStr.replace(/\s/gi, "");
  } else if (str.charAt(0) === str.charAt(0).toLowerCase()) {
    let newStr = str
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, " ")
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
      .join(" ");

    return newStr[0].toLowerCase() + newStr.slice(1).replace(/\s/gi, "");
  }
}

console.log(toCamelCase("tivon_is_a_cool_dude"));
