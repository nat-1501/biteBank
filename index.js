class Cliente {
    nome;
    cpf;
   
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
        
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Marcos";
cliente1.cpf = 11223344556;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = 33323344556;

const cliente3 = new Cliente();
cliente3.nome = "Julio";
cliente3.cpf = 22223344556;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;

console.log(ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.saldo = 100;
console.log(ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.sacar(250);


console.log(ContaCorrenteRicardo.saldo);




console.log(cliente1);
console.log(cliente2)