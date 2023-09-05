// Step problem

const n = parseInt(prompt("Enter Number"));
function steps(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        str += "#";
      } else {
        str += "-";
      }
    }
    console.log(str);
  }
}
steps(n);
