/*
Given an array of ailments, and an array of medication objects that have a nested array of treatableSymptoms
return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null


//create variables
//one variable to output our medication array
//one variable to hold count of which medication has the higher symptom match
//one variable to hold the previous medications treatment ailment match count 

//one loop that will go through the medications array

//one loop that will itterate through each treatable symptom in that medication
//an if statement that will check to see if any treatable symptoms match our given ailments
//if the symptoms match, plus one to our count variable and continue iterating through the treatable symptoms
//at the end of this loop check to see if the current count is higher than the previous count or equal to
//if higher than, clear the output array that is holding previous meds (unless its the first medication output will already be empty)
//if equal to, push the current medication into the output array and move on

//return the output array


function webMD(ailments, meds) {
    let output = [];
    counted = {};
    count = 0;
    for (let i = 0; i < meds.length; i++) {
        for (const symptom of meds[i].treatableSymptoms) {
            for (const ailment of ailments) {
                if (symptom === ailment) {
                    if (counted[meds[i].name]) {
                        counted[meds[i].name] += 1;
                    } else {
                        counted[meds[i].name] = 1;
                    }
                }
            }
        }
    }
    for (const amount in counted) {
        if (counted[amount] > count) {
            output = [];
            count = counted[amount];
            output.push(amount);
        } else if (counted[amount] === count) {
            output.push(amount);
        }
    }
    return output;
}
console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));