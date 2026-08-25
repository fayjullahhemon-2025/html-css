"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keTumi(siblings) {
    if (siblings === 'Nasima') {
        return 'Boro bon';
    }
    else if (siblings === 'Rubina') {
        return 'Mejho bon';
    }
    else if (siblings === 'Sumi') {
        return 'Seju bon';
    }
    else if (siblings === 'Emon') {
        return 'Ami';
    }
    else if (siblings === 'Payel') {
        return 'Amr choto';
    }
    else {
        return 'Ekbare choto';
    }
}
console.log(keTumi('Nasima'));
console.log(keTumi('Rubina'));
console.log(keTumi('Sumi'));
console.log(keTumi('Emon'));
console.log(keTumi('Payel'));
console.log(keTumi('Moon'));
