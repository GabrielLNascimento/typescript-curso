// undefined - algo que nao foi definido

let x;
console.log(x); // undefined

if (typeof x === 'undefined') x = 20;
console.log(x * 3);

function createPeople(
    nome: string,
    sobrenome?: string
): { nome: string; sobrenome?: string } {
    return {
        nome: nome,
        sobrenome: sobrenome,
        // sobrenome: sobrenome || "Sem sobrenome",
    };
}

const p1 = createPeople('Gabriel');
const p2 = createPeople('Ana', 'Barth');

console.log(p1)
console.log(p2)


function squareOf(x: unknown): number | null {
    // if (typeof x !== 'number') return null;
    // return x * x;
    return typeof x === "number" ? x * x : null
}

// console.log(squareOf(3));
// console.log(squareOf('3'));

const res1 = squareOf(3);
const res2 = squareOf('3');

if (res1) console.log("Deu boa")
if (res2) console.log("Deu boa também")