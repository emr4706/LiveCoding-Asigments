// // 1. Reverse text
// // Given a string of characters as input, write a function that returns it with the characters 
// // reversed. Don't use reverse function, use loops.
// // Example input: reverseText(Hello World!)
// // Example output: "!dlroW olleH"

function reverseText(text) {
    let newText = [];

    for (let x = text.length-1; x >= 0; x--){
        newText+= text[x];
    }
    return newText;
   
}
console.log(reverseText('Hello World!'));

// // 2. Palindrome checker
// // A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. 
// // Don't use reverse function, use loops.

// // Example input: isPalindrome('kayak')
// // Example output: true

// // Example input: isPalindrome('name')
// // Example output: false

function palindromeChecker(word) {

    let newWord = [];

    for (let x = word.length-1; x >= 0; x--){
        newWord+= word[x];
    } 
    if (newWord===word) {
        return true;
    } else {
        return false;
    }
}
console.log(palindromeChecker('kayak'));

// // 3. FizzBuzz
// // Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2,
// //  print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.

// // Example input: fizzBuzz(11)
// // Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function fizzBuzz(num) {
    let myArr = [];

    for (let i = 1; i <= num; i++) {
        if (i%2===0 && i%3==0) {
            myArr.push("Fizz Buzz")
        } else if (i%2===0) {
          myArr.push("Fizz");
        } else if (i%3===0) {
          myArr.push("Buzz");
        } else {
          myArr.push(i);
        }
      
    }
    console.log(myArr);
}
fizzBuzz(11);

// // 4. Reverse Array
// // Given an array of items, reverse the order. Don't use reverse function, use loops.

// // Example input: reverseArray([22, 'hi', 12])
// // Example output: [12, 'hi', 22]

var myArray = [22, 'hi', 12];
var reverseArray = [];
for (var i = myArray.length-1; i >= 0; i--) {
    console.log(myArray[i]);
    reverseArray.push(myArray[i]);

}
console.log(reverseArray);

// // 5. Reverse Words
// // Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.

// // Example input: reverseWords('I love JavaScript!')
// // Example output: 'I evol !tpircSavaJ'

function reverseWords(words) {
    let newWords = words.split(' ');
    // console.log(newWords);

    for (i = 0; i < newWords.length; i++){
        let sentence = newWords[i];
        // console.log(sentence);

        newText = "";
        for (let x = sentence.length-1; x >= 0; x--){
           newText=newText+sentence[x];
        }
        console.log(newText);
    }
}
reverseWords('I love JavaScript!');

// // 6. Capitalization
// // Given a phrase, capitalize every word.

// // Example input: capitalizeWords('i love javaScript!')
// // Example output: 'I Love JavaScript!

function capitalizeWords(str) {
    let newStr = str.split(' ');
    // console.log(newStr);

    let lastStr = "";
    for (let i = 0; i < newStr.length; i++) {
        let lastStr2 = newStr[i].slice(0,1).toUpperCase()+newStr[i].slice(1)+ ' ';
        lastStr+=lastStr2
    }
    console.log(lastStr);
}
capitalizeWords('i love javaScript!');

// 7. Subtract two Sets
// Given two arrays that contains integers, remove the integers of second array from the first.

// Example input: subctractArray([1, 2, 4, 6], [2, 6])
// Example output: [1, 4]
function subctractArray (arr1, arr2) {

    for (let i = 0; i < arr2.length; i++) {
        let myArr = [arr1.indexOf(arr2[i])];
      
        arr1.splice(myArr, 1);
    }
    console.log(arr1);
}
subctractArray([1, 2, 4, 6, 8, 10, 7], [2, 6, 8, 10]);

// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array
function highestNum(arr) {
let number = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
        number = arr[i];
    }
    
}
return console.log(number);
}
highestNum([1, 2, 7, 90, 8]);

// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')

// Example input: countWords('Hello World!')
// Example output: "2"
function countWords(words) {

    let str = words.split(' ');
    return str.length;
   
}
console.log(countWords('Hello World!'));

// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.

// first convert to array to a string. return numbers of the letters inside the string

// Example input: countLetters('e',['Hello','Worlds!'])
// Example output: "1"

function converLetters(letter, arr) {
    for (var i = 0; i < letter.length; i++) {

        var position = arr.toString();
        return position.indexOf(letter[i]);
        
    }
}
console.log(converLetters('e',['Hello','Worlds!']));

