const Template_Literals = (name, price) => {
    return `Sản phẩm ${name}, giá ${price}`
}


const greet = (name) => {
    return `Xin chào ${name}`
}

const sum = (num) => {
    let tong = 0;
    for(let i = 1; i <= num; i++) {
        tong += i;
    }
    return tong;
}

const square = (num) => {
    return Math.pow(num,2)
}

const isEven = (num) => {
    if (num % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

const firstElement = (nums) => {
    for (let i = 0; i < nums.length; i ++) {
        return nums[0]
    }
}

const sumAll = (...numbers) => {
    let tong = 0;
    for (const number of numbers) {
        tong += number;
    }
    return tong;
}

const user = (info) => {
    const {name, age} = info;
    return `Name: ${name}, Age: ${age}`
}

const name_user = (arrName) => {
    const names = arrName.map((user) => user.name).join(".");
    return names;
}

const  stringLength = (string) => {
    let arrstring = string.split("")
    return arrstring.length;
}

const toUpperCase = (string) => {
    return string.toUpperCase()
}

const formatCurrrency = (num) => {
    return num.toLocaleString('vi-VN',{
        style: 'currency',
        currency: 'VND'
    })
}

const max = (array) => {
    let numMAX = array[0];
    for (let num of array) {
        if (num > numMAX) {
            numMAX = num
        }
        else {
            continue
        }
    }
    return numMAX
}

const isPrime = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

const repeatString = (string,num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(string)
    }
    return arr.join(" ")
}

const sumOdd = (arr) => {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            continue
        else {
            tong += arr[i]
        }
    }
    return tong
}

const sumGreaterThan = (array,num) =>{
    let tong = 0;
    for (let number of array) {
        if (number > num)
            tong += number
    }
    return tong
}

const formatDate = (date) => {
    const newdate = new Date(date)

    const day = String(newdate.getDate()).padStart(2,'0');
    const month = String(newdate.getMonth() + 1).padStart(2,'0');
    const year = newdate.getFullYear();

    return `${day}/${month}/${year}`
}

const firstThree = (arr) => {
    let arrNum = []
    for (let i = 0; i < arr.length && i < 3; i++)
        arrNum.push(arr[i])
    return arrNum
}

const containsChar = (string1, string2) => {
    for (let letter of string1) {
        if (letter == string2) {
            return true
        }
    }
    return false
}

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const countOccurences = (array, value) => {
    let count = 0;
    for (let element of array) {
        if (element === value) {
            count++;
        }
    }
    return count;
}

const filterOdd = (arr) =>{
    return arr.filter((item) => item % 2 != 0)
}

const greaterThan = (arr, num) => {
    return arr.filter((item) => item > num)
}

const factorial = (num) => {
    if (num < 0) return "Không có giai thừa";
    let giaithua = 1;
    for (let i = 1; i <= num; i++) {
        giaithua *= i;
    }
    return giaithua;
}
const seperateEvenOdd = (arr) => {
    let even = arr.filter((num) => num % 2 === 0)
    let odd = arr.filter((num) => num % 2 !== 0)
    return {Even: even, Odd: odd}
}

const sortAsc = (arr) => {
    return arr.sort((a,b) => a - b)
}

const sumEvenIndex = (arr) => {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            tong += arr[i]
        }
    }
    return tong;
}

const multiplyByTwo = (arr) => {
    return arr.map((num) => num * 2)
}

const arrayToString = (arr) => {
    return arr.join("")
}
export {arrayToString ,multiplyByTwo, sumEvenIndex, sortAsc,seperateEvenOdd, factorial, greaterThan, filterOdd, countOccurences, mergeArrays, containsChar,firstThree, formatDate, sumGreaterThan, sumOdd, repeatString, Template_Literals, greet, sum, square, isEven, firstElement, sumAll, user, name_user, stringLength, toUpperCase, formatCurrrency, max, isPrime };