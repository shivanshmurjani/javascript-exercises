const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR'
    }
    if(!Number.isInteger(num1)||!Number.isInteger(num2)){
        return 'ERROR'
    }
    if(num1 < 0 || num2 < 0){
        return 'ERROR'
    }
    if(num1 > num2){
        num1 = num1+num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }
    let start = num1;
    let end = num2;
    let res = 0;

    for(let i = end; i>= num1; i--){
        res+=i;
    }
    return res
    

};

// Do not edit below this line
module.exports = sumAll;
