


/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.

Ok to use a new array

Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
Bonus: Keep it O(n) time even if it is not sorted
*/

const q1nums1 = [1, 1, 1, 1];
const q1expected1 = [1];

const q1nums2 = [1, 1, 2, 2, 3, 3];
const q1expected2 = [1, 2, 3];

const q1nums3 = [1, 1, 2, 3, 3, 4];
const q1expected3 = [1, 2, 3, 4];

const q1nums4 = [1, 1];
const q1expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    let hold = nums[0];
    let dupes = [];
    dupes.push(hold);
    for (let i = 0; i < nums.length; i++) {
        if (hold != nums[i]) {
            hold = nums[i];
            dupes.push(hold);
        }
    }
    return dupes;
}

console.log(dedupeSorted(q1nums1));
console.log(dedupeSorted(q1nums2));
console.log(dedupeSorted(q1nums3));
console.log(dedupeSorted(q1nums4));

/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else

If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/

const q2nums1 = [3, 5, 4, 3, 4, 6, 5];
const q2expected1 = 6;

const q2nums2 = [3, 5, 5, 4];
const q2expected2 = 3;

const q2nums3 = [3, 3, 5];
const q2expected3 = 5;

const q2nums4 = [5];
const q2expected4 = 5;

const q2nums5 = [];
const q2expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    const counted = {};
    let pairless = [];
    if (nums.length < 1) {
        return null;
    }
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (counted[element]) {
            counted[element] += 1;
        } else {
            counted[element] = 1;
        }
    }
    for (const pair in counted) {
        if (counted[pair] === 1) {
            pairless.push(pair);
            break;
        }
    }
    return pairless;
}

console.log(firstNonRepeated(q2nums1));
console.log(firstNonRepeated(q2nums2));
console.log(firstNonRepeated(q2nums3));
console.log(firstNonRepeated(q2nums4));
console.log(firstNonRepeated(q2nums5));