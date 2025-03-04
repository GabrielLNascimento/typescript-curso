function semRetorno(): void {
    // return "qualquer coisa"
    console.log('Qualquer coisa!!');
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Liz',
    exibirNome(): void {
        console.log(this.nome, this.sobrenome);
    }
};

pessoa.exibirNome();

export { pessoa };
