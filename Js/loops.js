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
 console.log(`tekstas "${tekstas}" atbulai yra "${atbulas}".`);
 

console.log( '--------------------');
// 11. dalyba be  liekanos 


 const from = 0;
 const till = 111154;
 const divider = 3;
 let count = 0;

 for  ( let i=from; i<=till; i++) {
    if (i % divider === 0 ) {
        count++;
    }
 }


 const answer = `Skaiciu intervale tarp ${from} ir ${till} besidalinanciu be
 liekanos is ${divider} yra ${count} vienetai.`;

 console.log(answer);
 