/*
Recursive Binary Search

Input: SORTED array of ints, int value
Output: bool representing if value is found

Recursively search to find if the value exists, do not loop over every element.

Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum, l = 0, r = sortedNums.length - 1) {
    if (l > r) {
        return false;
    }
    let mid = Math.floor((l + r) / 2);

    if (searchNum === sortedNums[mid]) {
        return true;
    } else if (searchNum > sortedNums[mid]) {
        return binarySearch(sortedNums, searchNum, mid + 1, r);
    } else if (searchNum < sortedNums[mid]) {
        return binarySearch(sortedNums, searchNum, l, mid - 1);
    }
}


console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));


// solved with slice built in
// function binarySearch(sortedNums, searchNum) {
//     if (sortedNums.length === 0) {
//         return false;
//     }

//     const middleIndex = Math.floor(sortedNums.length / 2);

//     if (sortedNums[middleIndex] === searchNum) {
//         return true;
//     }
//     else if (sortedNums[middleIndex] < searchNum) {
//         return binarySearch(sortedNums.slice(middleIndex + 1), searchNum);
//     }
//     else {
//         return binarySearch(sortedNums.slice(0, middleIndex), searchNum);
//     }
// }