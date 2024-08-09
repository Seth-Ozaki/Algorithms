//Each algorithm might be froim different sources, Instructions for each problem may vary.

// ------------------------------------------------------------
// Given an integral number, determine if it's a square number.

const isSquare = (n) => {
    return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n ? true : false;
};

// let testIsSquare = isSquare(4);
// console.log(testIsSquare);

// ------------------------------------------------------------
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = (words) => {
    if (words === "") {
        return "";
    }
    let wordArr = words.split(" ");
    let output = words.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        let place = wordArr[i].match(/(\d+)/);
        output[place[0] - 1] = wordArr[i];
    }
    return output.join(" ");
};

// let testOrder = order("A1lice 8Bob I5gor 6Heidi Jam4ila G2reg 3Ernst Fio7na");
// console.log(testOrder);

// ------------------------------------------------------------
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonal = (arr) => {
    let left = 0;
    let right = 0;
    let i = 0;
    let j = arr.length - 1;
    while (i < arr.length) {
        left += arr[i][i];
        right += arr[i][j];
        i++;
        j--;
    }
    return Math.abs(left - right);
};

// let testDiagonal = diagonal([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);
// console.log(testDiagonal);

// ------------------------------------------------------------
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// return the decimal value of each fraction on a new line with 6 places after the decimal.
// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

const plusMinus = (arr) => {
    let obj = {
        zero: 0,
        pos: 0,
        neg: 0
    };
    for (i = 0; i < arr.length; i++) {
        switch (true) {
            case (arr[i] === 0):
                obj.zero += 1;
                break;
            case (arr[i] > 0):
                obj.pos += 1;
                break;
            default:
                obj.neg += 1;
        }
    }

    return `${Math.abs(obj.pos / arr.length).toFixed(6)}\n${Math.abs(obj.neg / arr.length).toFixed(6)}\n${Math.abs(obj.zero / arr.length).toFixed(6)}`;
};

// let testPlusMinus = plusMinus([1, 1, 0, -1, -1]);
// console.log(testPlusMinus);

// ------------------------------------------------------------
// This is a staircase of n = 4 size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n that is also right aligned.

const staircase = (n) => {
};
