//Each algorithm might be froim different sources, Instructions for each problem may vary.

// ------------------------------------------------------------
// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.
// Example: Candles = [4,4,1,2]
// The maximum height candles are 4 units high.There are 2 of them, so return 2.

function birthdayCandles(candles: number[]): number {
    let count = 1;
    let max = candles[0];
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i];
            count = 1;
        } else if (candles[i] === max) {
            count++;
        }
    }
    return count;
}

// const testBirthdayCandles = birthdayCandles([8, 4, 8, 5, 7]);
// console.log(testBirthdayCandles);

// ------------------------------------------------------------
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(time: string): string {
    let period = time.slice(-2);
    let [hours, minutes, seconds] = time.slice(0, -2).split(":");
    let military: any;
    switch (true) {
        case (period === "AM" && hours === "12"):
            military = `00:${minutes}:${seconds}`;
            break;
        case (period === "AM" || (period === "PM" && hours === "12")):
            military = `${hours}:${minutes}:${seconds}`;
            break;
        default:
            military = `${Number(hours) + 12}:${minutes}:${seconds}`;
    }
    return military;
}

// const testTimeConversion = timeConversion("12:00:00AM");
// console.log(testTimeConversion);

// const testTimeConversion1 = timeConversion("04:00:00AM");
// console.log(testTimeConversion1);

// const testTimeConversion2 = timeConversion("12:00:00PM");
// console.log(testTimeConversion2);

// const testTimeConversion3 = timeConversion("4:00:00PM");
// console.log(testTimeConversion3);

// ------------------------------------------------------------
// HackerLand University has the following grading policy:
// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

const grading = (grades: number[]): number[] => {

    for (let i = 0; i < grades.length; i++) {
        let n = grades[i] % 10; //grabs the second digit of the grade
        if (grades[i] < 38) {
            continue;
        }
        if (n === 3 || n === 8) {
            grades[i] += 2;
        } else if (n === 4 || n === 9) {
            grades[i] += 1;
        }
    }
    return grades;
};

// const testGrading = grading([84, 43, 88, 79, 33]);
// console.log(testGrading);

// ------------------------------------------------------------
// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
//  We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const likes = (names: string[]): any => {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} likes this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
    }
};

// const testLikes = likes([]);
// console.log(testLikes);

// const testLikes1 = likes(["Peter"]);
// console.log(testLikes1);

// const testLikes2 = likes(["Jacob", "Alex"]);
// console.log(testLikes2);

// const testLikes3 = likes(["Max", "John", "Mark"]);
// console.log(testLikes3);

// const testLikes4 = likes(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"]);
// console.log(testLikes4);

// ------------------------------------------------------------
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
// Using the information given below, determine the number of apples and oranges that land on Sam's house.


// Where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
// *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

// Given the value of d for apples and oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?

// For example, Sam's house is between 7 and 10. The apple tree is located at 4 and the orange at 12. There are 3 apples and 3 oranges.
// Apples are thrown [2,3,-4] units distance from a, and oranges are thrown [3,-2,-4] units distance.
// Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6,7,0].
// Oranges land at [12 + 3, 12 + -2, 12 + -4] = [15,10,8]. One apple and two oranges land in the inclusive range 7-10 so we print 1,2

const fallingFruit = (s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): any => {
    let appleCount = 0;
    let orangeCount = 0;
    let mostDropped = apples.length >= oranges.length ? apples.length : oranges.length; // to make sure we loop over every array element in the case of different array sizes
    for (let i = 0; i < mostDropped; i++) {
        if ((a + apples[i]) >= s && (a + apples[i]) <= t) {
            appleCount++;
        }
        if ((b + oranges[i]) >= s && (b + oranges[i]) <= t) {
            orangeCount++;
        }
    }
    return (appleCount + "\n" + orangeCount);

};

// const testFallingFruit = fallingFruit(5, 10, 1, 12, [3, 5, 4, -2], [-2, -5, 4, 6, -3]);
// console.log(testFallingFruit);

// ------------------------------------------------------------
// You are choreographing a circus show with various animals.
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

const kangaroos = (x1: number, v1: number, x2: number, v2: number): any => {
    // Checks for different kangaroo velocity
    if (v1 !== v2) {
        const n = (x2 - x1) / (v1 - v2); // Equation to determine how many jumps it would take to land at same point
        return (Number.isInteger(n) && n >= 0) ? "YES" : "NO"; // to determine if the meeting point is positive (in the future), negative numbers assumed to be past meetings.
    } else {
        return x1 === x2 ? "YES" : "NO"; // If velocities are the same they must start at the same point to meet
    }
};

// const testKangaroos = kangaroos(0, 3, 4, 2); // Expected : YES
// console.log(testKangaroos);

// const testKangaroos1 = kangaroos(0, 2, 5, 3); // Expected : NO
// console.log(testKangaroos1);

// ------------------------------------------------------------
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.
// Example
// Scores = [12,24,10,24]
// Scores are in the same order as the games played. She tabulates her results as follows:
//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
// Return an array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

const recordBreaker = (arr: number[]): number[] => {
    let maxScore = arr[0];
    let minScore = arr[0];
    let maxMin = [0, 0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxScore) {
            maxScore = arr[i];
            maxMin[0]++;
        }
        if (arr[i] < minScore) {
            minScore = arr[i];
            maxMin[1]++;
        }
    }
    return maxMin;
};

// const testRecordBreaker = recordBreaker([12, 24, 10, 24]);
// console.log(testRecordBreaker)

// ------------------------------------------------------------
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.
// Example
// s = [2,2,1,3,2]
// d = 4
// m = 2
// Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. 
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].

const chocolate = (s: number[], d: number, m: number): number => {
    let output = 0;
    let count = 0;
    let i = 0;
    let x = 0;
    let j = 0;
    while (i < s.length) {
        count += s[x];
        j++;
        x++;
        if (j === m && count === d) {
            output++;
            i++;
            j = 0;
            x = i;
            count = 0;
        }
        if (j === m && count !== d) {
            i++;
            j = 0;
            x = i;
            count = 0;
        }
    }
    return output;
};

// let testChocolate = chocolate([2, 2, 1, 3, 2], 4, 2);
// console.log(testChocolate);
