// Solution 1

// function capitalize(str) {
//   let newData = [];
//   for (let word of str.split(" ")) {
//     const result = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     newData.push(result);
//   }
//   return newData.join(" ");
// }
// console.log(capitalize("HELLO THERE"));

// Solution 2

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
console.log(capitalize("HELLO WORLD THere"));