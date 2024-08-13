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

const testBirthdayCandles = birthdayCandles([8, 4, 8, 5, 7]);
console.log(testBirthdayCandles);