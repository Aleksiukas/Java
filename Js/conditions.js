"use strict";

const a = 7;
const b = 9;

// palyginimo operatoriai:
// rekomenduotina -  <, >, <=, >=, ===, !==;
// nerekomenduotina  -   ==, !=

// if (salyga ) {
    // logika kuria reikia ivykdyti, jei tenkinama salyga
// }

if ( a > b ) {
    console.log( 'taip, a yra daugiau uz b'); 
} else if (a===b) {
console.log('a yra lygu b');

}   else {
    console.log('ne, a yra ne daugiau uz b');
}

let diena = 1
if ( diena ===0) {
console.log('pirmadienis');
} else
if ( diena === 1) {
console.log('antradienis');
} else
if ( diena === 2) {
console.log('treciadienis');
} else
if ( diena === 3) {
console.log('ketvirtadienis');
} else
if ( diena === 4) {
console.log('penktadienis');
} else
if ( diena === 5) {
console.log('sestadienis');
if ( diena === 6) {
} else
console.log('sekmadienis');
}

console.log('--------------------------------');

const akys = 'ruda';
switch (akys) {
case 'ruda':
console.log('melagis');
break
case 'raudona':
console.log('vampyras');
break
case 'zalia':
console.log('zali dar');
break
case 'melyna':
    console.log(aha);
    break
}

