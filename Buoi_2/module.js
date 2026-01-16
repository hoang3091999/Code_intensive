import {intersection, findLongestString, isPermutation, uniqueValues, sumByGroup, asDupilicate, cleanObject, mergeObjectsSumValues, findMaxKey, isSubset, findSecondLargest, sumArray, countOccurrences, removeDuplicates, flattenArray, isSymmetric, sortProductsByPrice, findMostExpensiveProduct,  groupByType, countElements,  }  from './index.js';
console.log(countOccurrences([1, 2, 2, 3, 2],2));
console.log(findSecondLargest([10, 5, 8, 12, 15]));
const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];
console.log(findMostExpensiveProduct(products))
console.log(isSubset([1, 2, 3, 4], [2, 4]));
console.log(findMaxKey({ a: 10, b: 20, c: 15 }))
console.log(mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 } ))
console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a']))
console.log(cleanObject({ a: 1, b: null, c: undefined, d: 4 }))
console.log(asDupilicate([1, 2, 3, 4, 5]))
const arr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
];
console.log(sumByGroup(arr,"fruit"))
console.log(uniqueValues( [1, 2, 3],[3, 4, 5]))
console.log(isPermutation([1, 2, 3], [3, 2, 1]))
console.log(findLongestString(['abc', 'abcd', 'a']))
console.log(intersection([1, 2, 3],[2, 3, 4]))