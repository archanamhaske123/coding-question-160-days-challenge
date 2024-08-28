let array=[1,2,3,4,5,6,7,8,9];
let row=3;
for(i=0;i<row;i++){
    let result='';
    for(j=i;j<array.length;j=j+row){
       result +=array[j]+' ';
    }
    //console.log("output of array=[1,2,3,4,5,6,7,8,9] is ")
    console.log(result);
}
/* output of array=[1,2,3,4,5,6,7,8,9] ouput is 
1 4 7 
2 5 8 
3 6 9 */
