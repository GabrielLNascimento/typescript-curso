let nome: string = 'Gabriel';
let idade = 17;
let maiorIdade: boolean = idade >= 18;
let simbolo: symbol = Symbol('qualquer-simbolo');
let bigN: bigint = 10n;

let numeros1: Array<number> = [1, 2, 3];
let frases1: Array<string> = ['Ola', 'tudo', 'bom'];

let numeros2: number[] = [1, 2, 3];
let numeros4: Array<number[]> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let pessoa: { nome: string; idade: number } = {
    nome: 'Gabriel',
    idade: 17,
};
console.log(pessoa.nome);

function soma1(x: number, y: number): number {
    return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
