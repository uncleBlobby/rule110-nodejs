let container = document.getElementById("mainContainer");

function appendRow(parent){
    for(let i = 0; i < 100; i++){
        let newCell = document.createElement('div');
        newCell.classList.add('gridCell');
        parent.appendChild(newCell);
    }
}

function make10Rows(parent){
    for(let i = 0; i < 100; i++){
        appendRow(parent);
    }
}

drawFirstRow(container);
//make10Rows(container);

function drawFirstRow(parent){
    for(let i = 0; i < 100; i++){
        let newCell = document.createElement('div');
        newCell.classList.add('gridCell');
        if(i == 99){
            newCell.classList.add('alive');
        }
        parent.appendChild(newCell);
    }
}

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

let sampleGeneration        = [1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1];
let sampleNextGeneration    = [0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0];

function step(currentGen, patterns, newStates){
    let sections = [];
    let firstSlice = [currentGen[currentGen.length - 1], currentGen[0], currentGen[1]];
    sections.push(firstSlice);
    let slice = [];
    for(let i = 0; i < currentGen.length - 2; i++){
        slice = [currentGen[i], currentGen[i+1], currentGen[i+2]];
        sections.push(slice);
    }
    let lastSlice = [currentGen[currentGen.length - 2], currentGen[currentGen.length - 1], currentGen[0]];
    sections.push(lastSlice);
    //console.log(sections);
    //console.log(patterns);

    
    let nextGeneration = [];
    for(let i = 0; i < sections.length; i++){
        for(let j = 0; j < patterns.length; j++){
            if(arraysEqual(sections[i], patterns[j])){
                nextGeneration.push(newStates[j]);
            }
        }
    }
    //console.log(arraysEqual(patterns[0], sections[0]));
    //console.log(patterns[0] === sections[0])
    return nextGeneration;
}

let secondGeneration = step(sampleGeneration, patterns, newStates);

console.log(sampleGeneration);
console.log(secondGeneration);

console.log(`is calculated second generation equal to sample second gen? ${arraysEqual(sampleNextGeneration, secondGeneration)}`)
function arraysEqual(a1, a2){
    return JSON.stringify(a1) == JSON.stringify(a2);
}