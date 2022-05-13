class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();



cliente1.nome = "Marcos";
cliente1.cpf = 11223344556;
cliente1.agencia = 1001;
cliente1.saldo = 0; 

cliente2.nome = "Maria";
cliente2.cpf = 33323344556;
cliente2.agencia = 1001;
cliente2.saldo = 0; 

cliente3.nome = "Julio";
cliente3.cpf = 22223344556;
cliente3.agencia = 1001;
cliente3.saldo = 30; 

console.log(cliente1, cliente2);