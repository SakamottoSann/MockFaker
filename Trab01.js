
var prompt = require('prompt-sync')()

const faker = require("faker");

faker.locale = 'pt_BR';

fakerUser = [];

const dados = (amount) => {
    for (i = 0; i < amount; i++) {
        const obj = {
            nome: faker.name.findName(),
            nascimento: faker.date.between(1910, 2019).toLocaleString().split(" ")[0],
            genero: faker.random.arrayElement(['Feminino', 'Masculino', 'Outros']),
            ultimacompra: faker.date.between(2015, 2021).toLocaleString().split(" ")[0],
            compras: faker.datatype.number({ min: 1, max: 50 }),
        };
        fakerUser.push(obj);
    }
};

dados(1000);
// console.table(fakerUser)

menu:
while (true) {
    console.log("-------------------------------")
    console.log('Selecione o Exercicio')
    console.log('1. Clientes Por Busca ')
    console.log('2. Lista De Clientes')
    console.log('3. Clientes Por Pesquisa')
    console.log('4. Nome Dos Clientes')
    console.log('5. Primeiro Nome')
    console.log('6. Primeiro Nome por Pesquisa')
    console.log('7. Clientes Maiores de idade')
    console.log('8. Cliente Esta Na Lista')
    console.log('9. Total De Compras')
    console.log('10. Clientes Que Não Compram A Mais De 1 Ano')
    console.log('11. Clientes Com Mais De 15 Compras')
    console.log('"F" Para Finalizar.')


    var opcao = Number(prompt('Opção: '))

    switch (opcao) {
        case 1:
            Exercicio1()
            break
        case 2:
            Exercicio2()
            break
        case 3:
            Exercicio3()
            break
        case 4:
            Exercicio4()
            break
        case 5:
            Exercicio5()
            break
        case 6:
            Exercicio6()
            break
        case 7:
            Exercicio7()
            break
        case 8:
            Exercicio8()
            break
        case 9:
            Exercicio9()
            break
        case 10:
            Exercicio10()
            break
        case 11:
            Exercicio11()
            break
        default:
            break menu
    }
}

// 1 Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.
function Exercicio1() {
    const entrada = prompt("Pesquisa Por Nome:")
    findName(entrada);
}
function findName(name) {
    return console.table(fakerUser.filter((data) => data.nome.match(name)));
}


// 2 Retorne o array de clientes
function Exercicio2() {
    console.table(fakerUser.map((newData) => newData));
}

// 3 Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados.

function Exercicio3() {
    const entrada = prompt("Entrada: ")
    findData(entrada);
}

function findData(name) {
    var dados = fakerUser.filter((data) => data.nome.match(name))
    return console.log(dados.length);
}


// 4 Desenvolva uma função que retorne apenas os nomes dos clientes.
function Exercicio4() {
    console.table(fakerUser.map((item) => item.nome));
}

// 5 Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
function Exercicio5() {
    console.table(fakerUser.map((item) => item.nome.split(" ")[0]));
}

// 6 Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.

function Exercicio6() {
    const entrada = prompt("Entrada: ")
    firstChar(entrada);
}
function firstChar(letter) {
    var dados = fakerUser.filter((data) => data.nome.startsWith(letter));
    console.table(dados.map((item) => item.nome.split(" ")[0]));
}

// 7 Desenvolva uma função que retorne todos os usuários que são maiores de idade.

function Exercicio7() {
    const curYear = new Date().getFullYear();
    console.table(fakerUser.filter((e) => curYear - e.nascimento.split("/")[2] >= 25));
}


// 8 Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.

function Exercicio8() {
    const entrada = prompt("Entrada: ")
    findClient(entrada);
}
function findClient(param) {
    console.log(fakerUser.includes({ nome: param }));
}

function findClient(param) {
    const firstName = fakerUser.map((item) => item.nome.split(" ")[0]);
    if (firstName.includes(param) === false) {
        console.log("Nome Não Esta Na Lista")
    } else {
        console.log("Nome Esta Na Lista")
    }

}


// 9 Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.

function Exercicio9() {
    total = 0;
    fakerUser.map((item) => (total = item.compras + total));
    console.log('Total De Vendas:' + total);
}

// 10 Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.

function Exercicio10() {
    const curYear = new Date().getFullYear();
    console.log('Clientes que Não Compram à Mais de 1 ano')
    console.table(fakerUser.filter((e) => curYear - e.ultimacompra.split("/")[2] > 1));
}


// 11 Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.

function Exercicio11(value) {
    console.log('Clientes que Efetuaram Mais de 15 Compras')
    console.table(fakerUser.filter((item) => item.compras > 15));
}