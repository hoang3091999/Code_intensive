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

