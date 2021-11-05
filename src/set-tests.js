const MySet = require('./set');


const testArr = [1, 1, 2, 3, 4, 5, 5, 6];

console.log(`Initialization of set ${testArr} :`);
console.log(' ');

const example = new MySet(testArr);
console.log([...example]); // [ 1, 2, 3, 4, 5, 6 ]

console.log(' ');
console.log('set size:');
console.log(' ');

console.log(example.size) //6

console.log(' ');
console.log('for...of :');
console.log(' ');

for (const item of example) {
    console.log(item); // 1 2 3 4 5 6
}
console.log(' ');
console.log('for...of with entries():');
console.log(' ');

for (const item of example.entries()) {
    console.log(item); // [ 1, 1 ] [ 2, 2 ] ...
}

console.log(' ');
console.log('for...of with keys():');
console.log(' ');

for (const item of example.keys()) {
    console.log(item); // 1  2 ...
}

console.log(' ');
console.log('for...of with values():');
console.log(' ');

for (const item of example.values()) {
    console.log(item); // 1  2...
}

console.log(' ');
console.log('set size after clear():');
console.log(' ');

example.clear();
console.log(example.size); // 0

console.log(' ');
console.log('adding object and data, chaining add object:');
console.log(' ');

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

example.add(object);
example.add(data);


example.add(object).add(object).add(object);
console.log([...example]) // [ 1, 2, 3, 4, 5, 6, {}, {}, {}, {}, {} ]
console.log(' ');

console.log('deleting data and has({}), has(object), has(data)');
console.log(' ');
example.delete(data);

console.log(example.has({})); // false
console.log(example.has(object)); // true
console.log(example.has(data)); // false

console.log(' ');
console.log('logging tag');
console.log(' ');

console.log(example === example.valueOf()) // true
console.log(String(example)) // [object ^_^]
console.log(Object.prototype.toString.call(example)) // [object ^_^]

console.log(' ');
console.log('strange forEach :)');
console.log(' ');

example.forEach(function (item) {
    console.log(item.getValue.call(this)); // 42
}, data)