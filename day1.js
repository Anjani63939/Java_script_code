// split mehtod
// function reverseString(data){
//   return  data.split("/")
// }

// console.log(reverseString("Anja/ni.yadav/singh")
// )

// 02. reverse String
// function reverseString(str){
//    return str.split("").reverse()
// }
// console.log(reverseString("Kanha").join(""))

// 003 chekc palindrom

// const str= "Anjani"
//  const reverseString = str.split("").reverse().join("")


// function checkPalindrom(){
//     if(reverseString === str){
//         console.log(`${str} is palindrom`)
//     }
//     else{
//         console.log(`${str} is not palindrom`)
//     }
// }
// checkPalindrom()

// 004 find largest number

// function largestNumbert(data){
//     let largestNumber = data[0]


//     if(data.length < 1){
//         return null
//     }
//     else {
//         for(let i = 1 ; i < data.length ; i++){
//         if(  largestNumber < data [i])
//             largestNumber = data [i]
//         }
//     }
//     return largestNumber
// }
// console.log(largestNumbert([1,8,3,4,5]))





// 005 remove duplicate from array

// function duplicateCheck(arr){
//    return   [...new Set(arr)]

// }
// console.log(duplicateCheck( [1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]))



// 007 Frequency Counter

// function frequencyCounter(arr){
//     frequency ={}
// if(arr.length < 1 ){
// return null}
// else{
//     for(const item of arr ){
//         frequency[item] = (frequency[item]||0)+1
//     }
// return frequency
// }
// }
// console.log(frequencyCounter([1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]))


// 007 find the sum of array element


// function sumofarray(arr){


//     if(arr.length< 1 ){
//         return null
//     }
//     else{
//           let total_sum = 0
//         for( let item = 0; item < arr.length ; item++){
//              total_sum= arr[item] + total_sum
//         }
//         return total_sum
//     }

// }
// console.log(sumofarray([1,2,3,4,5]))


// 008 check odd or even

// function oddOreven(num){
// if(num % 2 === 0){
//     console.log(`${num} is even Number`)
// }
// else{
//      console.log(`${num} is Odd Number`)
// }
// }
// oddOreven(90)

// 009 — Factorial of a number
// function factorialNumber(num) {
// let factorial = 1
//     if (num.length < 1) {
//         return null
//     }
//     else {
//         for (let i = num; i > 0; i--) {
//              factorial = factorial * i
//         }

//     }
// return factorial

// }
// console.log(factorialNumber(5))


//009 — Count vowels in a string

