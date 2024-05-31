/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check
Object.hasOwn(someObj, "key")
someObj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

// Ninja.findByIdAndUpdate(req.params._id, {updateObject}, {options})

/*
here is a multi line
comment
*/

// JSDOCS

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedValues Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
function findByIdAndUpdate(id, updatedValues, collection) {

    //create a for loop to itterate through the given collection
    //have an if statement to find which object we are updated via given id

    //once we have found our objects id that matches the given id we can go in and update values
    //create another loop that itterates over the keys in our updated values
    //if the collections object has that key within itself, set that key value pair to the updated values key value pair

    //return the collection object we just updated

    // if nothing was given to us via updatedValues just return null

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
            for (const key in updatedValues) {
                if (Object.hasOwn(collection[i], key)) {
                    collection[i][key] = updatedValues[key];
                }
            }
            return collection[i];
        }
    }
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));