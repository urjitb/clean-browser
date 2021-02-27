var weightedRandom = require('weighted-random');


function genSize(){
//source: https://www.w3schools.com/browsers/browsers_display.asp
var browserSizes = [
    { weight: 4, size: { x: 1920, y: 1080 } },
    { weight: 5, size: { x: 1366, y: 768 } },
    { weight: 1, size: { x: 1536, y: 864 } },
    { weight: 1, size: { x: 1440, y: 900 } },
    { weight: 1, size: { x: 1280, y: 720 } }
];

var weights = browserSizes.map(function (size) {
    return size.weight;
});


var browserSize = browserSizes[weightedRandom(weights)].size;

return browserSize

}

function genLang(){

    
}

module.exports = { genSize }