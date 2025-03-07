// Array<T> - T[]

const numeros1: Array<number> = [1, 2, 3];
const numeros2: number[] = [1, 2, 3];

// um array de arrays de numeros
const numeros3: Array<number[]> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function soma(...args: Array<number>): number {
    // return args.reduce((a, b) => a + b);
    let soma = 0;
    for (let num of args) {
        soma += num;
    }
    return soma;
}
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));

function caixaAlta(...args: string[]): string[] {
    // let novasPalavras: string[] = []
    // for (let palavras of args) {
    //     novasPalavras.push(palavras.toUpperCase())
    // }

    let novasPalavras = args.map(palavra => palavra.toUpperCase())
    return novasPalavras
}

function verificaPresenca(arr: number[], target: number): boolean {
    for (let num of arr) {
        if (num === target) return true
    }
    return false
}

console.log(caixaAlta("gabriel", "salve", "eiiii"));

export { numeros1, numeros2, numeros3, soma };
