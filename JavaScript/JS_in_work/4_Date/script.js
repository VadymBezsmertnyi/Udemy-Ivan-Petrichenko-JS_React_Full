'use strict';

const now = new Date('2021-04-19');
//new Date.parse('2021-04-19');

console.log(now.setHours(18, 40));
console.log(now);

/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours()); */

//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

let start = new Date();

for(let i = 0; i < 100000; i++) {
    let some = i**3;
}

let finish = new Date();

console.log(`Відрацював цикл за: ${finish - start} мл.сек`);