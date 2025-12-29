import {arrayToString, multiplyByTwo, sumEvenIndex, sortAsc, seperateEvenOdd, factorial, greaterThan, filterOdd, countOccurences,mergeArrays, formatDate, sumOdd, repeatString, Template_Literals as productionInfo, greet, sum, square, isEven, firstElement, sumAll, user, name_user, stringLength, toUpperCase, formatCurrrency, max, isPrime, sumGreaterThan, firstThree, containsChar } from "./ultis.js";
console.log(productionInfo("Sách", 20000));
console.log(greet("An"));
console.log(sum(5));
console.log(square(6));
console.log(isEven(7));
console.log(firstElement([1,2,3]));
console.log(sumAll(1,2,3,4))
console.log(user({ name: "Nam", age: 30 }))
console.log(name_user([{ name: "And" }, { name: "Bình" }]))
console.log(stringLength("Hello World"))
console.log(toUpperCase("javascript"))
console.log(formatCurrrency(1000000))
console.log(max([10, 5, 20, 8]))
console.log(isPrime(7))
console.log(repeatString("hello",3))
console.log(sumOdd([1, 2, 3, 4]))
console.log(sumGreaterThan([1, 2, 3, 4], 2))
console.log(formatDate("2024-11-28"))
console.log(firstThree([1, 2, 3, 4, 5]))
console.log(containsChar("javasacript","i"))
console.log(mergeArrays([1, 2], [3, 4]))
console.log(countOccurences([1, 2, 2, 3, 2], 2))
console.log(filterOdd([1, 2, 3, 4]))
console.log(greaterThan([1, 2, 3, 4], 2))
console.log(factorial(5))
console.log(seperateEvenOdd([1, 2, 3, 4]))
console.log(sortAsc([3, 1, 4, 2]))
console.log(sumEvenIndex([1, 2, 3, 4]))
console.log(multiplyByTwo([1, 2, 3]))
console.log(arrayToString(["a", "b", "c"]))