function translatePigLatin(str) {
 if (str.match(/^[aeiou]/)) return str + "way";

 const consCluster = str.match(/^[^aeiou]+/)[0];
 return str.substring(consCluster.length) + consCluster + "ay"
}


console.log(translatePigLatin("glove")); 
