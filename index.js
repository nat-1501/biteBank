import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11223344556);
const cliente2 = new Cliente("Maria", 33323344556);
const cliente3 = new Cliente("Julio", 22223344556);


const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


ContaCorrenteRicardo.transferir(valor, conta2);

let valor = 200;

