// write a funcation to reverse of a string in js?
console.log("This is a reverse string funcation");
//using for loop
// create function
function reverseString(str){
//intialize the empty string to stpre the reverse string 
let reverString="";
//iterate throuth the charater of the input string in reverse order
for(let i = str.length - 1; i >= 0; i--){ 
	
	reverString += str[i];
}
return reverString;
}
console.log(reverseString("This is a reverse string funcation"));
//ouput: noitacnuf gnirts esrever a si sihT

// using inbuilt method

function reverString(str){
	
	return str.split("").reverse().join("");
}
console.log(reverString("Hello Javascript"));
//output:tpircsavaJ olleH