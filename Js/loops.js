"use strict"

// ciklas - kazkas kas yra vartojama
// kas tas kazkas?
// ka kartoja?
// kiek kartu?

// for ( let i=0; i<5; i++ ) {
//     console.log( i );
// }

// for ( let i=0; i<5; i = i + 3) {
//     console.log( i );
// }

console.log('------------------');
console.log('sumavimas intervale');
console.log('------------------');
// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30


const nuo = -70;
const iki = 30;
let kiek = 0;

for (let i=nuo; i<= iki; i++){
    kiek=kiek + i;
console.log('suma:', kiek);
}


console.log('------------------');
console.log('sumavimas intervale');
console.log('------------------');

const tekstas = 'abcdef';
const teksto_ilgis = tekstas.length;
let atbulas = '';

 for ( let i=0; i<teksto_ilgis; i++ ) {
     atbulas = atbulas + tekstas [i];
 }
 console.log(`tekstas "${tekstas}" atbulai yra "${atbulai}".`);
 