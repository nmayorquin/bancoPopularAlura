import {Cliente} from "./Cliente.js";

export  class CuentaCorriente{
    #cliente; /*colocamos el atributo cliente como privado usando numeral */
    numeroCuenta;
    #saldoCuenta; /*ademas de ser privado, es primitivo y se usa para metodo de depositar y retirar*/
    static cantidadCuentas = 0; /*este atributo es ESTÁTICO PARA QUE SU VALOR SE INICIALICE EN CERO Y NO SUME 1 EN EL CONSTRUCTOR */

    set cliente(valor){ /*set es un métdo para indicar que se va a asignar un valor */
        if (valor instanceof Cliente) /*si el valor recibidio es de la instancia (clase) cliente, sólo en ese punto atribuyo la referencia a cliente: ASI PROTEJO EL ATRIBUTO CLIENTE*/
        this.#cliente = valor; /* asignación a un atributo, un método: set = asignador (no es una función) la lectura de este se es:  al asignador(seteador) cliente el va a recibir un valor, y le decimos al atributo (this.cliente) se le asigna que viene en el valor */
    }

    get cliente(){ /* get es conseguir, así que: se crea el método get y retorna el valor que tiene cliente */
       return this.#cliente;
    }

    constructor(cliente, numeroCuenta){ /*a partir de la palabra constructor se crea una función: se ejecuta cada vez que se ejecuta una instancia: se realiza MOLDE(CLASE) Y DE INMEDIATO EL CONSTRUCTOR.....PUEDE IR CON PARÁMETROS O SIN PARÁMETROS */
        this.cliente = cliente;
       //this.#cliente = null; /*como cliente es un objeto, se debe declarar null CUANDO SE TIENEN MÉTODOS ESTA LÍNEA SOBRA Y QUEDA COMO LA LÍNEA DE ARRIBA*/
        this.numeroCuenta = numeroCuenta;
        this.#saldoCuenta = 0; /*saldo no va como parametro del contructor porque ese si debe siempre inicializar en cero */
        CuentaCorriente.cantidadCuentas++; /*COMO ES UN ATRIBUTO ESTÁTICO NO SE PUEDE ATRIBUIR COMO UN OBJETO THIS SINO CON LA INSTANCIA */
    }
    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldoCuenta += valor; /*ES IMPORTANTE DEFINIR CON THIS AL ATRIBUTO PORQUE DEBE FUNCIONAR DE FORMA GENÉRICA PARA CUALQUIER CUENTA Y NO: cuentaCorriente2.#saldoCuenta = cuentaCorriente2.#saldoCuenta+valor  */
        return this.#saldoCuenta;  
    }

    retiroDeCuenta(valor){ /*lo que hay dentro del paréntesis es un parámetro */
        if(valor<= this.#saldoCuenta)
            this.#saldoCuenta -= valor;
        return this.#saldoCuenta;    
    }

    verSaldo(){
        return this.#saldoCuenta;
    }
    
    transferCuenta(valor, cuentadestino){
        this.retiroDeCuenta(valor);
        cuentadestino.depositoEnCuenta(valor); /*estamos recibiendo datos de tipo primitivo (cuando se reciben numeros o strings) cuando js pasa el parámetro, este realiza una copia, acá particularmente recibimos un valor primitivo, una pieza de dato. js toma la variable y se la pasa a la función.
        A TENER EN CUENTA:
        cuando se crea una variable se crea una cajita de memoria, cuando paso el parámetro valor (que es primitivo) pasa el valor pero no la caja que lo contiene, a esto se le llama PARÁMETRO CON VALOR y al parámetro de cuentaDestino (en este caso) se le llama PARÁMETRO POR REFERENCIA: sucede para objeto, arreglos y variables más complejas
        */
       /*HAY QUE LEER MÁS SOBRE Parámetros por valor y por referencia */
    }
}

