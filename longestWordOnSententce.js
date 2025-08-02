console.log("Learning Javascript is a Fun");
// create function and pass the parameter
function logestWord(sentence){
    //first we split the sentence 
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

console.log(logestWord("Learning Javascript is a Fun"));
//Output: Javascript

