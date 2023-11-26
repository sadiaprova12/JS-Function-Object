/*
function functionname (parameters){
    // function body
    // return
}

var returnValue = functionname (parameters value) */

function getAverage (semester1, semester2, semester3){
    const total = semester1 + semester2 + semester3;
    const average = total / 3;
    return average;
}

const semester1Result = 60;
const semester2Result = 58;
const semester3Result = 59;

var myAverage = getAverage(semester1Result, semester2Result, semester3Result);
console.log('My average so far:', myAverage);