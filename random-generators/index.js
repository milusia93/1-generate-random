function randomIntiger(min, max) {
    
    if (min < max) {

        let minCeiled = Math.ceil(min);
        let maxFlored = Math.floor(max);
        intiger = Math.floor(Math.random() * (maxFlored - minCeiled + 1) + minCeiled);
        return intiger;
    } else {
        return "Pierwsza podana liczba musi być mniejsza od drugiej";
    }
}

function randomAlfaNum(len) {

 let ans = '';

 for (i = 0; i < len; i++){
    let code = randomIntiger(48,122);

    if ((code > 57 && code < 65) || (code > 90 && code < 97)){
        i--;
    } else {
        ans += String.fromCharCode(code);
    }   
 }
 return ans;
}

function randomIntArray(min, max, len) {

    let ans = [];
    for (i = 0; i < len; i++) {
        ans.push(randomIntiger(min, max)) ;
    }
    return ans;
}

module.exports.randomIntiger = randomIntiger;
module.exports.randomAlfaNum = randomAlfaNum;
module.exports.randomIntArray = randomIntArray;


