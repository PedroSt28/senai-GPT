function domoFilter () {
    
    const numeros = [1,2,3,4,5,6];/*Array vazia*/

    let numerosFiltrados = numeros.filter( numero => numero > 2);

    console.log (numerosFiltrados);

}




function demoFind(){

    let produtos = [{

        id: "1",
        nome: "teclado",
        preço: 100,
     },
     {
        id: "2",
        nome: "mouse",
        preço: 50,
     },
     {
         id: "3",
         nome: "Monitor",
         preço: 700,
     }];

     let produtoCaro = produtos.find(produto => produto.preço == 700);
    console.log(produtoCaro);
}


function demopmap(){

let numeros = [1,2,3,4,5]
let num_2 = numeros.map (numero => numero*2);
console.log(num_2)




}