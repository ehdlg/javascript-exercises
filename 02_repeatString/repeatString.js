const repeatString = function(stringToRepeat, repetition) {
    if(stringToRepeat === ''){
        return '';
    }
    if(repetition < 0){
        return 'ERROR';
    }
    let repeatedString = '';
    for(let i = 0; i < repetition; i++){
        repeatedString += stringToRepeat;
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
