import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

ContaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(ContaCorrenteRicardo);

