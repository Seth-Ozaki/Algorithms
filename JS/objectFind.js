/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// ==================================


// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];
// --------------------------------
const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor3 = {
    firstName: "Bob",
    pop: "hello"
};

const searchFor4 = {};



function findObjectsFilter(searchObj, items) {
    // PSEUDOCODE!!!!

    // create variables
    //an output array to return the objects that meet our condition

    //for loop that will loop through the array of objects
    //creat a variable that will hold whenther the current obj we are searching through is valid to push into our output array
    //for loop that will loop through the search objects keys 
    //if statement that will check to see if the key/values from searchobj match key/values from the input table

    // if the valid checker is still truthy, push the current obj into the output array

    let output = [];
    for (let objects of items) {
        let isValid = true;
        for (let key in searchObj) {
            if (objects[key] !== searchObj[key]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            output.push(objects);
        }
    }
    return output;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));
console.log(findObjectsFilter(searchFor3, items));
console.log(findObjectsFilter(searchFor4, items));
