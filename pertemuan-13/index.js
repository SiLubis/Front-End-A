//Rest Parameter & Spread Operator

//1. Rest Parameter
//tanpa rest parameter
// const func1 = (param1, param2, param3) => {
//     const.log (param1, param2, param3);
// };

// func1("A", "B", "C" "D" "E");

// //dengan rest parameter
// const func2 = (...parms) => {
//     console.log(params);
// }

// func2("A", "B", "C" "D" "E");

// const func3 = (...parms) => {
//     console.log(params);
// }

// func3("A", "B", "C" "D" "E");

// Mini Exercise
// Ubah dengan menggunakan rest parameter

// const penjumlahan = (a, b, c, d, e) => {
//     let arr = [a, b, c, d, e];
//     let hasil = 0;
//     arr.forEach ((item) => (hasil+= item))
//     return hasil;
// }

// console.log(penjumlahan(1, 2, 3, 4, 5,));

// answer Menggunakan rest parameter
const penjumlahan = (...angka) => {
    let hasil = 0;
    angka.forEach((item) => (hasil += item));
    return hasil;
}

console.log(penjumlahan(1, 2, 3, 4, 5));

//2. Spread Operator
let numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(...numbers);

//1. Saat duplikat array
let number2 = [...numbers];
console.log(numbers2);

//2. Menggunakan array
let array = [1, 2, 3];
let array = [4, 5, 6];
let array = [7, 8, 9];

let numbers3 = array1.concat(array2, array3); //ES5
let numbers4 = (...array1, ...array2, ...array3); //ES6


