/*Triangle Pattern — I
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let row = 5;

// outer loop runs for `rows` no. of times
for (i = 1; i <= row; i++) {
  // result variable carries the final result in string format
  let result = "";
  for (j = 1; j <= i; j++) {
    result += j + "";
  }
  console.log(result);
}

/* another way */

// result variable carries the final result in string format
let result = "";
// outer loop runs for `rows` no. of times
for (i = 1; i <= row; i++) {
  for (j = 1; j <= i; j++) {
    result += j;
  }
    // Add a new line character after contents of each line
  result += "\n";
}
console.log(result);
