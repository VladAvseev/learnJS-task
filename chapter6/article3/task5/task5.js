const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

console.log(arr.filter(inBetween(3, 6)));

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

console.log(arr.filter(inArray([1, 2, 10])));