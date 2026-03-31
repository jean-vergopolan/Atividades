Array.prototype.meuMap = function(callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this));
    }
    return novoArray;
};

Array.prototype.meuFilter = function(callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i]);
        }
    }
    return novoArray;
};

Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial !== undefined ? valorInicial : this;
    let indiceInicial = valorInicial !== undefined ? 0 : 1;

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};

const numeros = Array(1, 2, 3, 4, 5);

const dobrados = numeros.meuMap(function(n) {
    return n * 2;
});
console.log(dobrados);

const pares = numeros.meuFilter(function(n) {
    return n % 2 === 0;
});
console.log(pares);

const soma = numeros.meuReduce(function(acc, atual) {
    return acc + atual;
}, 0);
console.log(soma);