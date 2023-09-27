
// №1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function sumOfArrayElements(array) {

    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum;

}

let input = prompt("Введите элементы массива через запятую");
let array = input.split(",");

for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }

console.log(sumOfArrayElements(array));

// №2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function divisorArrayOfNumber(number) {
    
    let array = [];

    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            array.push(i)
        }        
    }

    return array;
}

let input2 = parseInt(prompt('Число: '))

console.log(divisorArrayOfNumber(input2))

// №3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function arrayFromString(string) {
    let array = string.split("");

    return array;
}

let input3 = prompt("Введите строку: ");
console.log(arrayFromString(input3));

// №4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

function reverseString(string) {
    return string.split("").reverse().join("")
}

let input4 = prompt('Строка: ')
console.log(reverseString(input4));

// №5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function upperFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let input5 = prompt('Строка: ')
console.log(upperFirstChar(input5));

// №6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

function upperFirstCharInWords(string) {
    
    let words = string.split(" ")
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ")
}

let input6 = prompt("Строка: ")
console.log(upperFirstCharInWords(input6));


// 7  Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
 function number(num){
    let arr = [];
     for (let i = 1; i < num; i++) {
         arr.push(i)  
    }
     return arr
 }
console.log(number(10))

// 8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function sum_num(num){
     let res = 0;
     for(let i = 0; i < String(num).length; i++){
         res += Number(String(num)[i])
    }
     return res
}
 console.log(sum_num(123))


// 9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
 function vis(year){
     if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
         return true
     }
     else{
         return false
     }
 }
 console.log(vis(2020))

// 10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
 function sec(num){
     return num/60/60/24
 }
 console.log(sec(86400))

// 11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
 function sluch(arr){
     let rand = Math.floor(Math.random() * (arr.length))
     return arr[rand]
 }
 let arr = [1, 2, 3, 4]
 console.log(sluch(arr))

// 12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
 function deli(num) {
 	for (let i = 2; i < num; i++) {
 		if (num % i == 0) {
             return false;
 		} else {
 			return true;
		}
 	}
 }
 console.log(deli(6)); 