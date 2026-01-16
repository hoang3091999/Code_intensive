export const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

export const countOccurrences = (array, value) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            count++;
        }
    }
    return count;
}

export const removeDuplicates = (array) => {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


export const flattenArray = (array) => {
    let flattenArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            flattenArray.push(array[i][j]);
        }
    }
    return flattenArray;
}

export const  isSymmetric = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
        else {
            return true;
        }
    }
}

export const findSecondLargest = (array) => {
    removeDuplicates(array);
    array.sort((a, b) => b - a);
    return array[1];
}

export const sortProductsByPrice = (products) => {
    return products.sort((a, b) => a.price - b.price);
}

export const findMostExpensiveProduct = (products) => {
    let max = products[0].price;
    let maxProduct = {};
    for (let i = 1; i < products.length; i++) {
        if (max < products[i].price) {
            max = products[i].price
            maxProduct = {...products[i]}
        }
    }
    return maxProduct
    // const found = products.find(product => product.price = max );
    // return found;
}


export const  groupByType = (products) => {
    let groupedProducts = {};
    for (let i = 0; i < products.length; i++) {
        let type = products[i].type;
        if (!groupedProducts[type]) {
            groupedProducts[type] = [];
        }
        groupedProducts[type].push(products[i]);
    }
    return groupedProducts;
}

export const isSubset = (array1, array2) => {
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            return false;
        }
    }
    return true;
}

export const findMaxKey = (data) => {
    let maxkey = null;
    let maxvalue = -Infinity
    for (const key in data) {
        if (data[key] > maxvalue) {
            maxkey = key
            maxvalue = data[key]
        }
    }
    return maxkey
}

export const mergeObjectsSumValues = (obj1,obj2) => {
    let merged = {...obj1};
    for (const key in obj2) {
        if (key in merged) {
            merged[key] += obj2[key];
        }
        else {
            merged[key] = obj2[key];
        }
    }
    return merged;
}

export const countElements = (array) => {
    let count = {}
    for (let i = 0; i < array.length; i++) {
        if (count[array[i]] !== undefined) {
            count[array[i]] += 1;
        }
        else {
            count[array[i]] = 1;
        }
    }
    return count;
}

export const cleanObject = (arr) => {
    for ( let key in arr) {
        if (arr[key] == undefined) {
            delete arr[key];
        }
    }
    return arr;
}

export const asDupilicate = (arr) => {
    const dup = {};
    for (let num of arr) {
        if(num in dup)  {
            return true;    
        } 
        dup[num] = true;
    }
    return false
}

export const sumByGroup = (arr,key) => {
    const result = {};

    for (let item of arr) {
        if (!result[item.type])
            result[item.type] = item.price;
        else {
            result[item.type] += item.price;
        }
    }
    return result
    // sum = 0
    // for (let item of arr) {
    //     if (item.type === key) {
    //         sum += item.price
    //     }
    // }
    // result[key] = sum
    // return result;
}

export const uniqueValues = (arr1,arr2) => {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
}

export const isPermutation = (arr1,arr2) => {
    const array = [...arr1,...arr2];
    console.log(array)
    let ispermutation = true
    for (let i = 0; i < array.length; i++) {
        if(array[i] == array[array.length - 1 - i]) {
            continue
        }
        else {
            ispermutation = false
            break;
        }
    }
    return ispermutation;
}

export const findLongestString = (array) => {
    let longestString = "";
    let maxLength = 0;
    for (let string of array) {
        if (string.length > maxLength) {
            maxLength = string.length;
            longestString = string;
        }
    }
    return longestString;
}

export const intersection = (arr1, arr2) => {
    const array = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            array.push(arr1[i]);
        }
    }
    return array;
}