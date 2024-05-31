// Your task in order to complete this algorithm is to write a function which formats a duration,
//  given as a number of seconds, in a human - friendly way.

// The function must accept a non - negative integer.If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.


// For seconds = 62, 
// your function should return; "1 minute and 2 seconds"
// For seconds = 3662, 
// your function should return; "1 hour, 1 minute and 2 seconds"

// For the purpose of this algorithm, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.In general, a positive integer and one of the valid units of time,
//  separated by a space.The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space(", ").Except the last component, 
// which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one.
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times.So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero.
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible".
// It means that the function should not return 61 seconds,but 1 minute and 1 second instead.
//  Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.;

//psuedo

//create a function that will accept a number as seconds

//create variables
//4 variables for minute, hour, day, year equal to how long it takes to pass in seconds
//a value equal to seconds so when we check each time variable against it we can freely manipulate it
//an array that will hold the time passed strings
//an output that will collect time passed strings and proper puncuation into one string value

//create two if statements that will check if input is 0 or under 60 so it will not have to itterate through other if statements

//create if statements that will check to see if the input value(seconds) is larger than what a time marker equals
//if true, find out how many units of this time passed, add that value to its respective time value, set the remainder of time left into our time variable
//add nested if statement to see if the value is 1 or many 
//if this is 1 push "1 (typeOfTime)" into our time passed string array
//if this is many push "(timeValue) (typeOfTime)s" into our time passed string array
//move on to the next if statement

//itterate through this array of strings
//this will check each index and their position in the array, if there is two time string values, it will add an "and" between them, if there are 3 or more it will
//add the "," between each string value and also add the "and" between the last two values

//push all of those strings into the output array

// return output

// this will give the remainder (124 % minuteTime);
// this will give the amount of times minute goes into the seconds (124 / minuteTime);

const timePassed = (seconds) => {
    let time = seconds;
    let minuteTime = 60;
    let hourTime = 3600;
    let dayTime = 86400;
    let yearTime = 31536000;

    let timeStrings = [];
    let output = [];

    if (seconds === 0) {
        return "now";
    }
    if (seconds < 60) {
        if (seconds === 1) {
            return "1 second";
        } else {
            return `${seconds} seconds`;
        }
    }
    if (time >= yearTime) {
        let years = Math.floor(time / yearTime);
        time = (time % yearTime);
        if (years === 1) {
            timeStrings.push("1 year");
        } else {
            timeStrings.push(`${years} years`);
        }
    }

    if (time >= dayTime) {
        let days = Math.floor(time / dayTime);
        time = (time % dayTime);
        if (days === 1) {
            timeStrings.push("1 day");
        } else {
            timeStrings.push(`${days} days`);
        }
    }

    if (time >= hourTime) {
        let hours = Math.floor(time / hourTime);
        time = (time % hourTime);
        if (hours === 1) {
            timeStrings.push("1 hour");
        } else {
            timeStrings.push(`${hours} hours`);
        }
    }

    if (time >= minuteTime) {
        let minutes = Math.floor(time / minuteTime);
        time = (time % minuteTime);
        if (minutes === 1) {
            timeStrings.push("1 minute");
        } else {
            timeStrings.push(`${minutes} minutes`);
        }
    }

    if (time > 0) {
        if (time === 1) {
            timeStrings.push("1 second");
        } else {
            timeStrings.push(`${time} seconds`);
        }
    }

    for (let i = 0; i < timeStrings.length; i++) {
        if (i === timeStrings.length - 1) {
            output.push(timeStrings[i]);
            break;
        }
        if (i != timeStrings.length - 2) {
            output.push(`${timeStrings[i]},`);
        } else {
            output.push(`${timeStrings[i]} and`);
        }
    }
    return output.join(' ');
};
console.log(timePassed(0));
console.log(timePassed(1));
console.log(timePassed(2));

console.log(timePassed(31536000));//1 year
console.log(timePassed((31536000 * 2)));//2 years

console.log(timePassed((31536000 + 86400)));//1 year 1 day
console.log(timePassed(((31536000 * 2) + (86400 * 2))));//2 years 2 days

console.log(timePassed((31536000 + 86400 + 3600)));//1 year 1 day 1 hour
console.log(timePassed(((31536000 * 2) + (86400 * 2) + (3600 * 2))));//2 years 2 days 2 hours

console.log(timePassed((31536000 + 86400 + 3600 + 60)));//1 year 1 day 1 hour 1 minute
console.log(timePassed(((31536000 * 2) + (86400 * 2) + (3600 * 2) + (60 * 2))));//2 years 2 days 2 hours 2 minutes

console.log(timePassed((31536000 + 86400 + 3600 + 60 + 1)));//1 year 1 day 1 hour 1 minute 1 second
console.log(timePassed(((31536000 * 2) + (86400 * 2) + (3600 * 2) + (60 * 2) + (1 * 2))));//2 years 2 days 2 hours 2 minutes 2 seconds

console.log(timePassed(((31536000) + (86400 * 2) + (60) + (1 * 2))));//1 year 2 days 1 minute 2 seconds

