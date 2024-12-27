const removeFromArray = function(array, ...target) {
    let result = new Array();

    for(let value of array){
        if(target.includes(value)){
            continue;
        }
        result.push(value);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
