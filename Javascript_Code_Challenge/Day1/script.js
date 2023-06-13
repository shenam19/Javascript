// Solution 1
function strReverse(str) {
  return str.split("").reverse().join("");
}
console.log(strReverse("Hellothere"));

//Solution 2
// function strReverse(str) {
//   var arr = str.split("");
//   var reverse = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   console.log(reverse.join(""));
// }
// strReverse("Hellothere");

// Solution3
// function strReverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
// console.log(strReverse("Hellothere"));
