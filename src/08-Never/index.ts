function criaErro(msg: string): never {
    throw new Error(msg);
}

function multiplicaNums(arr: any[]): number {
    const numberAll = arr.reduce((a, b) => {
        if (typeof b !== 'number') {
            criaErro('O array deve conter apenas Números');
        }
        return a * b;
    });
    return numberAll;
}

const numeros = [1, 2, 3, 4, 5, "oie", 6, 7, 8]
console.log(multiplicaNums(numeros))