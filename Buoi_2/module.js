import {findSecondLargest, sumArray, countOccurrences, removeDuplicates, flattenArray, isSymmetric, sortProductsByPrice, findMostExpensiveProduct,  groupByType,  }  from './index.js';
console.log(countOccurrences([1, 2, 2, 3, 2],2));
console.log(findSecondLargest([10, 5, 8, 12, 15]));
const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];
console.log(findMostExpensiveProduct(products))