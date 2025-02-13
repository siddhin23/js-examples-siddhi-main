"use strict"; //treat all JS code as newer version
// alert('Hello'); we are using node.js and not browser

let score = '333rty';

console.log(typeof score);
console.log(typeof(score));

let valueInString = String(score);

console.log(typeof valueInString);

let valueInNumber = Number(valueInString);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

let flag = true
let flag1 = false
let flag2 = ''
let flag3 = 'siddhi'
console.log("flag", typeof flag);
console.log("flag1",typeof flag1);
console.log('flag3',typeof flag2);
console.log('flag4',typeof flag3);

let valueInBoolean1 = Boolean(flag2);
console.log('valueInBoolean1',typeof valueInBoolean1);
console.log('valueInBoolean1', valueInBoolean1); //false
let valueInBoolean2 = Boolean(flag3)
console.log('valueInBoolean2',typeof valueInBoolean2);
console.log('valueInBoolean2', valueInBoolean2); //true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null === 0); //false

console.log('2' > 3); //false
console.log('2'===2); //false
console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
















