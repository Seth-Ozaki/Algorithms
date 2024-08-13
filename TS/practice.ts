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

const testTimeConversion = timeConversion("12:00:00AM");
console.log(testTimeConversion);

const testTimeConversion1 = timeConversion("04:00:00AM");
console.log(testTimeConversion1);

const testTimeConversion2 = timeConversion("12:00:00PM");
console.log(testTimeConversion2);

const testTimeConversion3 = timeConversion("4:00:00PM");
console.log(testTimeConversion3);

// ------------------------------------------------------------

