/*
String Decode  
*/

const string1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const string2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    str.split('');
    let hold = [];
    let x;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && !isNaN(str[i + 1])) {
            x = str[i] + str[i + 1];
            for (let j = 0; j < x; j++) {
                hold.push(str[i - 1]);
            }
        }
        if (!isNaN(str[i]) && isNaN(str[i - 1])) {
            x = str[i];
            for (let j = 0; j < x; j++) {
                hold.push(str[i - 1]);
            }
        }
    }
    str = hold.join('');
    return str;
}

console.log(decodeStr(string1));
console.log(decodeStr(string2));


/*
Given in an alumni interview in 2021.

String Encode

You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcddd";
const exp1 = "a4b2c1d3";

const str2 = "";
const exp2 = "";

const str3 = "a";
const exp3 = "a1";

const str4 = "bbcc";
const exp4 = "b2c2";

const str5 = "bbccddd";
const exp5 = "b2c2d3";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
    let count = 0;
    let check = str[0];
    let hold = [];
    for (let i = 0; i <= str.length; i++) {
        if (check === str[i]) {
            count++;
        }
        if (check != str[i]) {
            hold.push(check + count);
            check = str[i];
            count = 0;
            count++;
        }
    }
    str = hold.join('');
    return str;
}

console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));
console.log(encodeStr(str5));