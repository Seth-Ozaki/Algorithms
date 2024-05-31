/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//            v
const arr1 = [1, 4, 3, 6, 9, 3];

const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];




const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => elem > 2;
const expected2 = [4, 3, 6, 9, 3];




const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = elem => false;
const expected3 = [];


// app.get("/api/movies", (req, res) => {
//     // ...
// })

//create a for loop that will go through the given array

// use the callback function to test each index to see if the callback function returns true
//if the callback returns false, slice one since it will be at the front of the array

//return given array

function dropIt(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            arr = arr.slice(1);
            i--;
        }
        if (callback(arr[i])) {
            return arr;
        }
    }
    return arr;
}

console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));


//solved with a while loop

function dropIt2(arr, callback) {
    let i = 0;
    while (i < arr.length) {
        if (!callback(arr[i])) {
            arr = arr.slice(1);
        }
        if (callback(arr[i])) {
            break;
        }
    }
    return arr;
}

console.log(dropIt2(arr1, callback1));
console.log(dropIt2(arr2, callback2));
console.log(dropIt2(arr3, callback3));