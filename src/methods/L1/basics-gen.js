var weightedRandom = require('weighted-random');


function genSize(){
//source: https://www.w3schools.com/browsers/browsers_display.asp
var browserSizes = [
    { rating: 4, size: { x: 1920, y: 1080 } },
    { rating: 5, size: { x: 1366, y: 768 } },
    { rating: 1, size: { x: 1536, y: 864 } },
    { rating: 1, size: { x: 1440, y: 900 } },
    { rating: 1, size: { x: 1280, y: 720 } }
];

var weights = browserSizes.map(function (size) {
    return size.rating;
});


var browserSize = browserSizes[weightedRandom(weights)].size;

return browserSize

}

function genLang(){

    
}

module.exports = { genSize }