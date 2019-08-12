// 1. Seconds to Minutes
// Create a function that accepts one argument (seconds) and converts it into minutes and seconds and returns back.

// Example input: (94)
// Example output: "1 minutes and 34 seconds"

function secConventer (seconds) {
    return Math.floor(seconds/60) + " minutes and " + seconds%60 + " seconds.";
}
console.log(secConventer(94));
// function secondtominute(second) {

//     var minute = Math.floor(second / 60);
//     var sec = second % 60;

//     if (minute < 1 && sec>0) {
//         return console.log(sec + ' seconds')
//     }
//     else {
//         if (minute > 1 && sec>0 ) {
//             return console.log(minute + ' minutes ' + sec + ' seconds')
//         } 

//         if (sec==0){
//             return console.log(minute+' minutes');
//         }
//     }

// };

// console.log(secondtominute(1801));

// 2. Print the written number with prefix
// Create a function that accepts one argument (number) and returns it as a string with 
//'Number is: " prefix.

// Example input: (22)
// Example output: "Number is: 22"

function numberCode(number) {
    console.log(`"Number is: ${number}"`);
}
numberCode(22);

// function numberCode(value) {
//     console.log("Number is: " +value);
// }
// numberCode(22);

// 3. Remove the 2nd string from the 1th string
// Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.

// Example input: ('I am a happy person.', 'person')
// Example output: "I am a happy ."

function stringRemoves(firstString, secondString) {
   return  firstString.replace(secondString, " "); 
    // repalce icin ilk stringin icinden secondstringi cikar yerine bos birak.
}
console.log(stringRemoves('I am a happy person.', 'person'));

// 4. Replace the 2nd string with the 3rd string
// Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.

// Example input: ('I am a bad person.', 'bad', 'good')
// Example output: "I am a good person."

function stringRepalece(first, second, third) {
   return first.replace(second, third);
    // burada firsten second u cikar yerine third yaz.   
    
}
console.log(stringRepalece('I am a bad person.', 'bad', 'good'));


// 5. Return the closest bigger even number of the given number
// Create a function that accepts one argument(number) and returns the closest bigger even number of given number.

// Example input: (354)
// Example output: 356

// Example input: (23)
// Example output: 24

function biggerEven(number) {
    if (number%2 === 0){
        console.log(number+2);
    }
    if (number%2 === 1) {
        console.log(number+1);

    }
}
biggerEven(20);


// 6. Create a simple calculator function
// Create a function that accepts three arguments(number1, number2, theMathOperator) and does a calculation based on the 
//given math operator* and returns the result.

// Math operators: +, -, /, *
// Example input: (11,5,'+')
// Example output: 16

// Example input: (50,20,'/')
// Example output: 2.5
function calculator(number1, number2, theMathOperator) {
    if(theMathOperator === '+') {
        console.log(number1+number2)
    }
    if(theMathOperator === '-') {
        console.log(number1-number2)
    }
    if(theMathOperator === '/') {
        console.log(number1/number2)
    }
    if(theMathOperator === '*') {
        console.log(number1*number2)
    }
}
calculator(8, 9, '-');


// 1. Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length 
//(second argument). Return the truncated string with a ... ending.

// Tasks

// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".

// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket 
//A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".

// truncateString("A-", 1) should return "A...".

// truncateString("Absolutely Longer", 0) should return "...".

// // truncateString("Absolutely Longer", -1) should return "...".

function truncateString (text, num) {
    return '"' + text.substring(0, num) + "..." + '"';
    //  text ilk harfi 0 pozisyon olsun ve num da bitsin.  
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));


// 2. Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Tasks

// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") 
//should return false.
// confirmEnding("Open sesame", "same") should return true.
// Do not use the built-in method .endsWith() to solve the challenge.
// confirmEnding("Abstraction", "action") should return true.

function confirmEnding(string, target) {
    var mainstring = string.length;
    var targetstring = target.length;
    var check = string.substring((mainstring - targetstring), mainstring);
    if (target == check) {
       return true; 
    } else  {
        return false;
    } 
}
console.log(confirmEnding("Congratulation", "on"));
// function endWords(text, word) {
//   var a = text.length;
//   var b = word.length;
//   var res = text.slice(a - b, a);
//   if (res == word) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var result = endWords("Congratulation", "on");
// console.log(result);








