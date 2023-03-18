const reverseString = function(strVal) {
    let rev='';
    let n = strVal.length;
    for(let i=n-1;i>=0;i--){
        rev+=strVal[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
