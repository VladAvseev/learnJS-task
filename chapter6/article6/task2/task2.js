function sum(a) {

    let currentSum = a;

    function foo(b) {
        currentSum += b;
        return foo;
    }

    foo.toString = function() {
        return currentSum;
    };

    return foo;
}

console.log(sum(1)(2));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));