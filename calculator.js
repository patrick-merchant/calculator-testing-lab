const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = (a, b) => a * b;

const divide = function (a, b){
    return a / b;
};

const modulus = (a, b) => a % b;

// const even = function(a){
//     if(a % 2 === 0){
//         return true;
//     } else return false;
// };

// const odd = function(a){
//     if(a % 2 != 0){
//         return true;
//     } else return false;
// };

// Alternative even and odd, reusing code in line with extension:

const even = function(a){
    if(modulus(a, 2) === 0){
        return true;
    } else return false;
};    

const odd = function(a){
    if(modulus(a, 2) != 0){
        return true;
    } else return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
