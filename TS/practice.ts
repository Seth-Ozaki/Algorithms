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
