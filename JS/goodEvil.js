// Description
// Middle Earth is about to go to war.The forces of good will have many battles with the forces of evil. 
// Different races will certainly be involved.Each race has a certain worth when battling against others. 
// On the side of good we have the following races, with their associated worth:

// Hobbits: 1;
// Men: 2;
// Elves: 3;
// Dwarves: 3;
// Eagles: 4;
// Wizards: 10
// On the side of evil we have:

// Orcs: 1;
// Men: 2;
// Wargs: 2;
// Goblins: 2
// Uruk Hai: 3;
// Trolls: 5;
// Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, 
// if you add up the worth of the side of good and compare it with the worth of the side of evil,
// the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good,
// followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. 
// Each parameter will be a string of multiple integers separated by a single space. 
// Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non - negative integers.The resulting sum of the worth for each side will not exceed the limit of a 32 - bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins,
// "Battle Result: Evil eradicates all trace of Good" if evil wins,
// "Battle Result: No victor on this battle field" if it ends in a tie.;


//pseudo code

//create a function that will accept a good side string and an evil side string

// create variables
//one variable for each that will convert the given strings into an array of numbers showing units per species on both sides
//one variable for each that holds an array of values depending on species value
//one variable for each that holds the value of each sides power

//a for loop for each side that checks each index of the converted string array and multiplies its value based on its power from the set power array

//return a string based on the outcome of the battle



function goodVsEvil(good, evil) {
    let goodSide = good.split(' ').map(Number);
    let evilSide = evil.split(' ').map(Number);

    let goodTroops = [1, 2, 3, 3, 4, 10];
    let evilTroops = [1, 2, 2, 2, 3, 5, 10];

    let goodCount = 0;
    let evilCount = 0;

    for (let i = 0; i < goodSide.length; i++) {
        goodCount += goodSide[i] * goodTroops[i];
    }
    for (let j = 0; j < evilSide.length; j++) {
        evilCount += evilSide[j] * evilTroops[j];
    }
    if (goodCount > evilCount) {
        return "Battle Result: Good triumphs over Evil";
    }
    if (goodCount < evilCount) {
        return "Battle Result: Evil eradicates all trace of Good";
    }
    if (goodCount === evilCount) {
        return "Battle Result: No victor on this battle field";
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));