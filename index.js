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

ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);



console.log(ContaCorrenteRicardo.saldo);

