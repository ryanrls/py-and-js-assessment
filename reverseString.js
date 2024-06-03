function reverseString(str){
    //split str between space to array
    let separate = str.split(" ");

    //for each word, split to alphabet, reverse the order, then join without space
    let reverseWord = separate.map(word => {return word.split("").reverse().join("")}) 

    //join all the reversedWord with space
    let reverseSentence = reverseWord.join(" ");

    return reverseSentence;
}

var word = "Welcome to this Javascript Guide!";
console.log(reverseString(word));
