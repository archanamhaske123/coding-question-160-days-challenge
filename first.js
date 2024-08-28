let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let row = 3;

// outer loop runs for `rows` no. of times
for (i = 0; i < row; i++) {
  // result variable carries the final result in string format
  let result = "";
  for (j = i; j < array.length; j = j + row) {
    result += array[j] + " ";
  }
  //console.log("output of array=[1,2,3,4,5,6,7,8,9] is ")
  console.log(result);
}
/* output of array=[1,2,3,4,5,6,7,8,9] ouput is 
1 4 7 
2 5 8 
3 6 9 */

/* another way */
// result variable carries the final result in string format
let result = "";
// outer loop runs for `rows` no. of times
for (i = 0; i < row; i++) {
  for (j = i; j < array.length; j = j + row) {
    result += array[j];
  }
  result += "\n";
}
//console.log("output of array=[1,2,3,4,5,6,7,8,9] is ")
console.log(result);
