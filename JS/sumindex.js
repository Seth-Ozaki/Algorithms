/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    given: [3,2,4]
    target: 6
    output: [1,2]

    given: [3,3]
    target: 6
    output: [0,1]
*/


// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:


// create a function that accepts an array and a target value

// create variables
//one for a return array
//one to hold one index we are checking against (i)
//one to incriment to check against our hold variable (j set equal to i+1)

//create while loop with j less than the input arrays length as condition

//if statement to check the sum of the two indexs
//if true, push both indexes into return array
//break if we matched target value
//else
// incriment j

//if j equals the end index of the array return array length is 0
//incriment i
//reset j if it doesnt automatically do it

//return array

const sumIndex = (arr, target) => {
    let output = [];
    let i = 0;
    let j = i + 1;

    while (j < arr.length) {
        if (arr[i] + arr[j] === target) {
            output.push(i, j);
            break;
        } else {
            j++;
        }
        if (j === arr.length) {
            i++;
            j = i + 1;
        }
    }
    return output;
};

console.log(sumIndex([4, 4, 2, 7], 11));

