//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

//APPROACH 
//to be divisible by 100 .... (1) num => 100 .(2) num % 100 === 0

// function divBy100(num) {
//     if(num % 100 === 0) {
//         return true;
//     }
//     else if (num >= 100){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function divBy100(num) {
    if(num >= 100 && num % 100 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(divBy100(1));
console.log(divBy100(1000));
console.log(divBy100(100));
