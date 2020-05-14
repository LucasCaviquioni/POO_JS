//Classe
class Conta {
    //Atributos
        _numero;
        _saldo;
        _usuario;
        _limite;
        _agencia;

    //Método
    constructor(numero, saldo, usuario, limite){
        this._limite = limite;
        this._numero = numero;
        this._saldo = saldo;
        this._usuario = usuario;
        this._agencia = 1602;
    }
    depositar(valor){
        this._saldo += valor
    }

    mostrarConta () {
    console.log(`Esta é a conta ${this._numero}, com saldo ${this._saldo} do usuario ${this._usuario} 
    e com limite de ${this._limite}. Agencia ${this._agencia}`)
    }   
}

//Criando ou instanciando um objeto da classe "Conta"
var conta1 = new Conta(0001, 500, "Maycon", 2000);
    conta1.depositar(500);
    conta1.mostrarConta();
    conta1.saldo = 1000;
    console.log(conta1.saldo);



//    conta1.mostrarConta();

//var conta2 = new Conta(5268, 525, "Lucas", 3500);
    //conta2.mostrarConta();
