// Q-3: Implement Caching/Memoize Function

// Creating memoize function to store previous arguments data
function myMemoize(fn, context) {
    const res = {};
    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

// Functions for clumsy product
const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) {

    };
    return num1 * num2;
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First Call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("Second Call");