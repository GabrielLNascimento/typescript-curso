const obj1 = {
    chave1: 'valor 1',
    chave2: 'valor 2',
    chave3: 'valor 3',
};

obj1.chave1 = 'Outro valor';

// obj1.chave4 = "valor 4"

// ------------------------------------

const obj2: Record<string, unknown> = {
    chave1: 'valor 1',
    chave2: 'valor 2',
};

// ------------------------------------

const obj3: {
    readonly chaveA: string;
    chaveB: number;
    chaveC: boolean;
    [key: string]: unknown;
} = {
    chaveA: 'A',
    chaveB: 1,
    chaveC: true,
};

obj3.chaveD = 'qualquer coisa';