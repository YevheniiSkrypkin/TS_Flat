function flatten(array: Array<any>){
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    };    
    return Infinity > 0 ? array.reduce((acc, val: Number) => acc.concat(Array.isArray(val) ? flatten(val) : val), []) : array.slice();

}

const arr: (number | (number | number[])[])[] = [1, 2, [3, 4, [5, 6]]];
const newArray2: (number | (number | number[])[])[] = [1, [2, [3, 4, 5]]]


console.log(flatten(arr));
console.log(flatten(newArray2));