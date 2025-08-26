//exercicio i

//const old = prompt("quantos anos voce tem?")

//if (old >= 18) {//
//    alert("vai tirar a CNH")
//} else {
//    alert("voce é de menor, super nani")
//}

//exercicio 2 

//const number = prompt("DIGITE UM NUMERO QUALQUER")
//if (number < 0) {

//    alert("seu numero é negativo ")
//} else {
//    alert("seu numero é positivo")
//}


//exercicio 3


//const nota = prompt("qual a sua nota ?")

//if (nota >= 60) {
//    alert("paraben voce esta aprovado ")
//} else {
//    alert("reprovado")
//}


//exercicio 4 


//const number = prompt("DIGITE SEU NUMERO")
//if (number > 0) {

//    alert("Seu numero é positivo ")
//} else {//
//    if (number == 0) {
//        alert("seu numero é 0")
//    } else {
//        alert("seu numero é negativo")
//    }
//}



//exercicio 5


//const idade = prompt("quantos anos voce tem?")

// if (idade >= 18) {
//     alert("voce é Adulto/a")
// } else {
//     if (idade <= 12) {
//         alert("voce é criança")
//     } else {
//         alert("voce é adolescente")
//     }
// }


//exercicio 6


//const number = prompt("digite um numero")
//if (number % 2 == 0) {
//    alert("seu numero é par")
//} else {
//    alert("seu numero é impar")
//}


//exercicio intermediario 1


//const num1 = Number(prompt("fale um numero"))
//const operaçao = prompt("escolha uma operaçao : +,-,*,/")
//
//if (operaçao == "+") {
//    alert(num1 + num2)
//} else {
//    if (operaçao == "-") {
//        alert(num1 - num2)
//    } else {
//        if (operaçao == "*")
//            alert(num1 * num2)
//   } if (operaçao == "/") {
//        alert(num1 / num2)
//   }
//}


//exercicio intermediario 2


//const num1 = Number(prompt("digite um numero"))
//const num2 = Number(prompt("digite um numero"))
//const num3 = Number(prompt("digite um numero"))

//if (num1 > num2 && num1 > num3) {
//    alert(`o maior numero é o ${num1}`)
//} else {
//    if (num2 > num1 && num2 > num3) {
//        alertalert(`o maior numero é o ${num2}`)
//    } else {
//        alert(`o maior numero é o ${num3}`)
//    }
//}


//exercicio intermediario 3 

//const preço = Number(prompt("quanto voce esta disposto a pagar?"))
// if (preço > 100) {
//     alert(`se voce pagara ${preço * 0.9}`)
// } else {
//     alert(`voce vai pgar ${preço} no credito no debito ou pix?`)
// }


//exercicio intermediario 4


//const user1 = prompt("Insira o nome de usuario")
//const password1 = prompt("Insira sua senha")
//const user2 = prompt("Confirme seu nome de Usuario")
//const password2 = prompt("Confirme sua senha")

//if (user1 == "adm" && password1 == 1234) {
//    alert("login bem sucedido")
//} else {
//    alert("negado")
//}



//exercicio Avançado 1 



//const lado1 = prompt("primeiro lado do triangulo")
//const lado2 = prompt("segundo lado")
//const lado3 = prompt("terceiro lado ")

//if (lado1 == lado2 && lado1 == lado3) {
//    alert("triangulo equilatero")
//} else {
//    if (lado1 == lado3 || lado1 == lado2) {
//        alert("triangulo isoceles")
//    } else {
//        alert("o triangulo é escaleno")
//    }
//}



//exercicio Avançado 3



//let peso = Number(prompt("digite seu peso"))
//let altura = Number(prompt("digite sua alura"))
//imc = (peso / (altura * altura))

//if (25 < imc) {
//    alert("acima do peso ")
//} else {
//    if (18.5 > imc) {
//        alert("abaixo do peso")
//    } else {
//        alert("peso ideal")
//    }
//}


//exercicio Avançado 4


//let year = Number(prompt("digite um ano para verificar que é bisexto"))
//calculo = (year % 4 == 0 && year % 100 == !0)

//if (calculo) {
//    alert("é bisexto")
//} else {
//    if (year % 400 === 0) {
//        alert("é bisexto")
//    } else {
//        alert("nao é bisexto")
//    }
//}