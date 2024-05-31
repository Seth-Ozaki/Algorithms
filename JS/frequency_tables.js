/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const q1expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const q1expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const q1expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    const counted = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].toLowerCase(); //remove 'toLowerCase()' for case sensitive
        if (counted[element]) {
            counted[element] += 1;
        } else {
            counted[element] = 1;
        }
    }
    return counted;
}

console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));
console.log(makeFrequencyTable(arr3));

// Level 1: Case sensitive
// Level 2: Case insensitive


// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    const counted = {};
    let pairless = [];

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (counted[element]) {
            counted[element] += 1;
        } else {
            counted[element] = 1;
        }
    }
    for (const pair in counted) {
        if (counted[pair] % 2 === 1) {
            pairless.push(pair);
        }
    }
    return pairless;
}

console.log(oddOccurrencesInArray(nums1));
console.log(oddOccurrencesInArray(nums2));
console.log(oddOccurrencesInArray(nums3));
console.log(oddOccurrencesInArray(nums4));