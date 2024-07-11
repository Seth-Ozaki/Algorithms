/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8(1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.; */


const wordScore = (words) => {
    let alph = 'abcdefghijklmnopqrstuvwxyrz'.split('');
    let topScore = 0;
    let topWord;
    let testScore = 0;
    let testWord = [];
    for (let i = 0; i <= words.length; i++) {
        if ((alph.indexOf(words[i]) + 1) === 0 || i === words.length) {
            if (testScore > topScore) {
                topScore = testScore;
                topWord = testWord.join("");
            }
            testScore = 0;
            testWord = [];
            continue;
        }
        testScore += (alph.indexOf(words[i]) + 1);
        testWord.push(words[i]);
    }
    return topWord;
};


// let test = wordScore('man i need a taxi up to ubud');
// console.log(test);

// let test1 = wordScore('what time are we climbing up the volcano');
// console.log(test1);

// let test2 = wordScore('wdfnafjqegqvjkyzpjxgf iidnmjcxhyvfxcwvyxbss uckeztidbivmkfspmzuxz lcexfeudtpjwjqsiknlen');
// console.log(test2);