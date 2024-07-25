const random = require('./random-generators');

console.log(random.randomIntiger(process.argv[2],process.argv[3]))
console.log(random.randomAlfaNum(process.argv[2]));
console.log(random.randomIntArray(process.argv[2],process.argv[3],process.argv[4]));
