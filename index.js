/*ORGANIZACIÓN DEL CÓDIGO EN MÓDULOS
    SE REALIZA LA IMPORTACIÓN DE CLASES: para trabajar con módulos se deben instalar paquetes json a través de NPM */
import {Cliente} from "./Cliente.js";
import {CuentaCorriente} from "./CuentaCorriente.js";

//CLIENTE 1 CLIENTE 1 CLIENTE 1 CLIENTE 1
/*FORMA 1 DE INCLUIR PARÁMETROS EN LOS OBJETOS: cuando la instancia cliente no tenía constructor: REVISAR ARCHIVO DE CLIENTE*/
/*const cliente = new Cliente();
cliente.nombreCliente = "Natalia Mayorquin";
cliente.idCliente = "123456";*/

/*FORMA 2 DE INCLUIR PARÁMETROS EN LOS OBJETOS: con constructor en la instancia: REVISAR ARCHIVO DE CLIENTE*/
const cliente = new Cliente("Natalia Mayorquin", "123456" );
const cliente2 = new Cliente("Luis Granados", "654321");


/*FORMA 1 DE INCLUIR PARÁMETROS EN LOS OBJETOS: cuando la instancia cliente no tenía constructor: REVISAR ARCHIVO DE CLIENTE*/
//const cuentaNata = new CuentaCorriente(); /* CuentaCorriente() es un constructor implicito (sin parámetros)*/
//cuentaNata.numeroCuenta = "1111111";
//cuentaNata.numero = 1;
//cuentaNata.cliente = cliente;

/*FORMA 2 DE INCLUIR PARÁMETROS EN LOS OBJETOS: con constructor en la instancia: REVISAR ARCHIVO DE CLIENTE*/
const cuentaNata = new CuentaCorriente(cliente, "1111111"); /* CuentaCorriente() es un constructor implicito (sin parámetros)*/
const cuentaLucho = new CuentaCorriente(cliente2, "222222");

console.log(CuentaCorriente.cantidadCuentas); /*en cosola aparecen dos cuentas */

console.log(cuentaNata.cliente);
console.log(cuentaLucho.cliente);



//console.log(cuentaNata);

//let saldo = cuentaNata.verSaldo(); 
//console.log("el saldo actual de nata es " + saldo); /*ENCAPSULA LOS VALORES POR EL COMPORTAMIENTO QUE TIENE EL ATRIBUTO PRIVADO */

//saldo = cuentaNata.depositoEnCuenta(150);
//console.log("su nuevo saldo de nata con el deposito es " + saldo);


//CLIENTE 2 CLIENTE 2 CLIENTE 2 CLIENTE 2
/*const cliente2 = new Cliente();
cliente2.nombreCliente = "Luis Granados";
cliente2.idCliente = "654321"; */


//const cuentaLucho = new CuentaCorriente(); /*esto es un valor de referencia */
/*cuentaLucho.numeroCuenta = "222222";
cuentaLucho.numero = "2";
cuentaLucho.setCliente = cliente2; 
*/
//if (cuentaLucho.getCliente)
    //console.log(cuentaLucho.getCliente);
   // cuentaLucho.setCliente = 0; /*si no usáramos la gestión de atributos privados, y por error se digita un número, se va a perder la nformación que trae clilente */
//else
//console.log(cuentaLucho.getCliente);

//cuentaNata.transferCuenta(100, cuentaLucho);   /*esto es un valor de referencia */


//let saldolucho = cuentaLucho.verSaldo(); 
//console.log("el saldo actual (cuentalucho) " + saldolucho); /*ENCAPSULA LOS VALORES POR EL COMPORTAMIENTO QUE TIENE EL ATRIBUTO PRIVADO */

//const saldoNata = cuentaNata.verSaldo(); 
//console.log("el saldo actual de cuenta nata después de transferencia es " + saldoNata);

/* UNA BUENA PRÁCTICA ES NO TENER VARIABLES UNDEFINED, SE USA LA PALABRA RESERVADA NULL PARA CREAR EL ESPACIO DE MEMORIA Y QUE EL PROGRAMA SEPA QUE VA A RECIBIR UN VALOR (leer explicación en el word de banco popular)
*********en este código por ejemplo, si coloco en cuentaLucho.cliente = 0; la impresión del resultado será nulo y no indefinido --> LEER MÁS SOBRE NULL Y UNDEFINED
*/

