/* 
Acronyms

Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 

// Do it with .split first if you need to, then try to do it without
// */

const string1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const string2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const string3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const string4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    let acro = '';
    let split = str.split(" ");
    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        if (word.length > 0) {
            acro += word[0].toUpperCase();
        }
    }
    return acro;
}
console.log(acronymize(string1));
console.log(acronymize(string2));
console.log(acronymize(string3));
console.log(acronymize(string4));

/*
String: Reverse

Given a string,
return a new string that is the given string reversed
*/

const str1 = "creature";
const exp1 = "erutaerc";

const str2 = "dog";
const exp2 = "god";

const str3 = "hello";
const exp3 = "olleh";

const str4 = "";
const exp4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));