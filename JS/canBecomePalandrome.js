/*
Interview Question:
Given a string
return whether or not it's possible to make a palindrome out of the string's characters
What is it about a string that makes it possible for it to be a palindrome?
Determine whether or not it is possible for the string's characters to be
rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// level
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


const str6 = "abc";
const expected6 = false;


/* 
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.
Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/


//! write the function and the pseudocode first!

//create a function that will accept a given string

//create variables
//empty hashmap that we can keep track of each letter in the given string
//a checker equal to true we will use later when checking to see if the given string is a palandrome
//a count variable we can count how many odd key/value pairs we have (if ever more than one it should break and return false)

//loop through the given string
//if the current index is not in the hashmap, add it and give it a value of one
//if it already exists in the hashmap just add one to its paired value

//loop through the hashmap checking each key/value
//if the value is odd, add one to our count variable
//if the value of count is above two break this loop

//return out checkers value


const canBecomePalindrome = (str) => {
    const hash = {};
    let valid = true;
    let count = 0;
    if (str.length === 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            hash[str[i]] += 1;
        } else
            hash[str[i]] = 1;
    }
    for (const key in hash) {
        if (hash[key] % 2 === 1) {
            count++;
            if (count > 1) {
                valid = false;
            }
        }
    }
    return valid;
};

console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome(str6));


// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true