function flatten(array) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    ;
    return Infinity > 0 ? array.reduce(function (acc, val) { return acc.concat(Array.isArray(val) ? flatten(val) : val); }, []) : array.slice();
}
var arr = [1, 2, [3, 4, [5, 6]]];
var newArray2 = [1, [2, [3, 4, 5]]];
console.log(flatten(arr));
console.log(flatten(newArray2));
