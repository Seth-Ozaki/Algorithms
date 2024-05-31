/* 
Array: Binary Search (non recursive)

Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .

Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const numbers1 = [1, 3, 5, 6];
const searchNum1 = 4;
const q1expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const q1expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const q1expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const q1expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNumbers, searchNum) {
    let l = 0;
    let r = sortedNumbers.length - 1;
    let mid;
    while (r >= l) {
        mid = l + Math.floor((r - l) / 2);
        if (sortedNumbers[mid] == searchNum)
            return true;
        if (sortedNumbers[mid] > searchNum)
            r = mid - 1;
        else
            l = mid + 1;
    }

    return false;
}


console.log(binarySearch(numbers1, searchNum1));
console.log(binarySearch(numbers2, searchNum2));
console.log(binarySearch(numbers3, searchNum3));
console.log(binarySearch(numbers4, searchNum4));


/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const q2expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const q2expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const q2expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const q2expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    let hold = [];
    let array;
    if (arr1.length > arr2.length) {
        array = arr1.length;
    } else {
        array = arr2.length;
    }
    for (let i = 0; i < array; i++) {
        if (arr1[i] != null) {
            hold.push(arr1[i]);
        }
        if (arr2[i] != null) {
            hold.push(arr2[i]);
        }
    }
    return hold;
}

console.log(interleaveArrays(arrA1, arrB1));
console.log(interleaveArrays(arrA2, arrB2));
console.log(interleaveArrays(arrA3, arrB3));
console.log(interleaveArrays(arrA4, arrB4));