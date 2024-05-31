/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 

    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// RIOT

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"


//            v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""


const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"


const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".


//Create a function that will accept two strings into them

//create variable
//two empty arrays that we will push/pop from while we look through the given strings

//create a loop that will iteratte through the two given string(may need two loops)
//if statement to see if the current index is #
//if true we will use the pop method on our array to "backspace"
//if false we will use the push method to place that index into the array

//return true or false if the created arrays match


const backspace = (s1, s2) => {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '#') {
            arr1.pop(s1[i - 1]);
        } else {
            arr1.push(s1[i]);
        }
    }

    for (let j = 0; j < s2.length; j++) {
        if (s2[j] === '#') {
            arr2.pop(s2[j - 1]);
        } else {
            arr2.push(s2[j]);
        }
    }

    return (arr1.join('') === arr2.join(''));
};


console.log(backspace(S1, T1));
console.log(backspace(S2, T2));
console.log(backspace(S3, T3));
console.log(backspace(S4, T4));


//refactored with a while loop 

const backspace2 = (s1, s2) => {
    let arr1 = [];
    let arr2 = [];

    let i = 0;
    let j = 0;

    while (i < s1.length || j < s2.length) {
        if (s1[i] === '#') {
            arr1.pop(s1[i - 1]);
            i++;
        } else {
            arr1.push(s1[i]);
            i++;
        }
        if (s2[j] === '#') {
            arr2.pop(s2[j - 1]);
            j++;
        } else {
            arr2.push(s2[j]);
            j++;
        }
    }

    return (arr1.join('') === arr2.join(''));
};

console.log(backspace2(S1, T1));
console.log(backspace2(S2, T2));
console.log(backspace2(S3, T3));
console.log(backspace2(S4, T4));