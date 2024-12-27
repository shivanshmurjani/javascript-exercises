const repeatString = function(x, num) {
    if(num < 0){
        return "ERROR";
    }
    let newString = x.repeat(num);
    return newString;
    for(let i = 0; i < num; i++){
        newString+=x;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
