// In this algo, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays.
//  If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, 
//     we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. 
// In case of a plateau-peak, please only return the position and value of the beginning of the plateau. 
// For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

//pseudo code


//create a function that accepts an input arr

//create variables
//an output object that holds a position(index) array and a peak(index value) array
//a plateau and plateau index variable to set our plateau peaks position and peak value when we hit a true plateau peak

//for loop to itterate over the array
//if statement that checks if the left and right side values are lower than the current position value
//if true push the position and peak value into our output object to their respective keys arrays

//if statement that checks to see if the left side value is smaller but the right side value is equal to our current position value for potential plateau peak
//if true set plateau and plateau index equal to the current position and peak value

//if statement that checks to see if we have hit the end of a plateau peak if the left is equal to current AND previously set plateau value and is bigger than the right side value
//if true push the plateau index and plateau value into our position and peak arrays in our output array and reset plateau and plateau index for the next potential plateau peak

//return output object


const peaks = (arr) => {
    let output = {
        pos: [],
        peaks: []
    };
    let plateau;
    let plateauidx;
    for (let i = 1; i < arr.length; i++) {
        //this if statement strictly collects peaks
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            output.pos.push(i);
            output.peaks.push(arr[i]);
        }
        //this if statement checks for the beginning of a plateau peak
        if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            plateau = arr[i];
            plateauidx = i;
        }
        //this if statement checks for the end of a plateau peak
        if (arr[i] === arr[i - 1] && arr[i] === plateau && arr[i] > arr[i + 1]) {
            output.pos.push(plateauidx);
            output.peaks.push(plateau);
            plateau = null;
            plateauidx = null;
        }
    }
    return output;
};

console.log(peaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));//pos [3,7] peak[6,3]
console.log(peaks([1, 2, 3, 6, 4, 3, 1, 2, 3, 2, 1]));//pos [3,8] peak[6,3] 
console.log(peaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])); //pos[2,7,14,20] peak[5,6,5,5]
console.log(peaks([2, 1, 3, 2, 2, 2, 2, 1]));//pos [2] peak [3]
