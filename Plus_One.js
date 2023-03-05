let digits = [1,2,3];

function plusOne(digits) {
    let numString= "";

    for(let i=0; i < 3; i++){
        numString += digits[i]
    }
    return numString;
};

console.log(plusOne());
