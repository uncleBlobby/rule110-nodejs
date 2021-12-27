// RULE 110
// nodejs implementation

/*
-------------------------------INIT--------------------------------------------------
*/

// sample data
// tests main function against known input and output to verify computation

const sampleGeneration        = [1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1];
const sampleNextGeneration    = [0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0];

// newSeed
// input data for the desired output of the computation (can be modified to any combination of bits)
let newSeed                 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];

//  patterns
//  all the possible 3 bit input slices

let patterns = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0],
];

//  newStates
//  newStates are the outputs for the machine, corresponding to each pattern of input
//  each pattern in the input generation will produce the corresponding output state center bit
//  ex:     input pattern   = [1, 1, 1]
//          output bit      = [ , 0,  ]

let newStates = [
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0
];

/*
-------------------------------MAIN-------------------------------------------------
*/

// step(input, patterns, newStates)
// main function takes currently known generation input and sections it into 3 bit slices
// compares 3 bit slices to all known input patterns and generates child 
// logs child array to output and then recursively generates next child based on next generation input

let rowCounter = 0;

function step(currentGen, patterns, newStates){

    // while loop runs function recursively until row counter target is reached
    while(rowCounter < 50){
        // each iteration, initialize empty array to hold 3 bit sections of generation data
        // ** sections is an array of arrays **
        let sections = [];
        // find all 3 bit sections of current generation, update sections array
        sections = findAllSections(currentGen, i = 0, sections);
        // computes the next generation based on all sections of current generation, checking for patterns and pushing newStates to next generation
        let nextGeneration = computeOutput(sections, patterns);
        // increments counter
        rowCounter++;
        // prints output of current generation as pretty string for user visualization
        console.log(genArrayToString(nextGeneration));
        step(nextGeneration, patterns, newStates);
    }
    return null;
}

// outputs original generation to begin output stream
console.log(genArrayToString(newSeed));

// rungs main body function 
step(newSeed, patterns, newStates);

// computeOutput(sections, patterns)
// checks all sections of previous generation against possible patterns and pushes output state into next generation
function computeOutput(sections, patterns){
    let arr = [];
    for(let i = 0; i < sections.length; i++){
        for(let j = 0; j < patterns.length; j++){
            if(arraysEqual(sections[i], patterns[j])){
                arr.push(newStates[j]);
            }
        }
    }
    return arr;
}

function findAllSections(currentGen, i, sections){
    sections.push(getSlice(currentGen, i = 0, "first"));
    findMiddleSections(currentGen, sections);
    sections.push(getSlice(currentGen, i = 0, "last"));
    return sections;
}

function getSlice(currentGen, i = 0, position){
    switch (position){
        case "first":
            return [currentGen[currentGen.length - 1], currentGen[0], currentGen[1]];
            break;
        case "last":
            return [currentGen[currentGen.length - 2], currentGen[currentGen.length - 1], currentGen[0]];    
            break;
        case "middle":
            return [currentGen[i], currentGen[i+1], currentGen[i+2]];    
            break;
    }
}

function findMiddleSections(currentGen, sections){
    for(let i = 0; i < currentGen.length - 2; i++){
        sections.push(getSlice(currentGen, i, "middle"));
    }
}

/*
-------------------------------UTILS-------------------------------------------------
*/

// utility function converts bits in each generation to stringified symbols (0 = ' ', 1 = '*') to prettify output
function genArrayToString(generationArray){
    let outputString = '';
    for(let i = 0; i < generationArray.length; i++){
        if(generationArray[i] == 0){
            outputString += ' ';
        };
        if(generationArray[i] == 1){
            outputString += '*';
        };
    }
    return outputString;
}

// utility function to check equality of slices against patterns
function arraysEqual(a1, a2){
    return JSON.stringify(a1) == JSON.stringify(a2);
}
