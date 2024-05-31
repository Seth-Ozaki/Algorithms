// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs.
// Elements of each pair represent the number of people that get on the bus (the first item)
// and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop
// (after the last array). Even though it is the last bus stop,
// the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


const counter = (arr) => {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        amount += arr[i][0];
        amount -= arr[i][1];
    }
    return amount;
};




console.log(counter([[10, 0], [3, 5], [5, 8]]));
console.log(counter([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(counter([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
console.log(counter([[0, 0]]));