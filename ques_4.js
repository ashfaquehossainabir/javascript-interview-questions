// Q-4: Output based question on Event Loop

console.log("a");
setTimeout(() => console.log("Set"), 0);
Promise.resolve(() => console.log("Pro")).then((res) => res());
console.log("b");

// a
// b
// Pro
// Set

/* To analyse this code, go to https://jsv9000.app */