console.log("JavaScript is a powerful programming language");
// create function and pass the parameter
function logestWord(sentence){
    //first we split the sentence into array of word// use splace on split(" ")
    const words = sentence.split(" ");
    // 2. initialize the empty string
    let longest='';
    for(let word of words){
        //3. check if current word is longer than a current longer
        if(word.length > longest.length){
            longest=word;
        }
    }
     return longest;
}

console.log(logestWord("JavaScript is a powerful programming language"));
//Input: "JavaScript is a powerful programming language"
//Output: "programming"

