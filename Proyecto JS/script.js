


// let usuario = prompt("ingrese su nombre de usuario");

// let pass = prompt("ingrese su contraseña")




// if(usuario == "" || (pass == "")) {
//     alert("No ingresaste nombre de usuario o contraseña")
// }



// let edad = Number(prompt("ingrese su edad"));

// if(edad<18){
//     alert("Mostrar bebidas sin alcohol");

// }else if(edad>=18){
//     alert("Mostrar tienda completa");
// }


// let compras = prompt("Ingrese el producto que quiera llevar")

// do{
//     if(compras == "Fernet" || compras == "Cerveza" || compras == "Smirnof" ||compras == "Chandon" ||compras == "Vodka" ||compras == "Champagne")

//     alert("Agregaste " + compras + "al carrrito")
    

// }while ((compras == "esc") || (compras == ""));



// alert("por ser tu primer compra te regalamos un descuento del 20% en tu primer bebida")

// let productos = prompt("ingrese su primer compra aqui")
// let precioTotal;

// switch(productos){
//     case "Fernet" :
//         precioTotal= 1200
//     break
//     case "Cerveza" :
//         precioTotal= 320
//     break
//     case "Smirnof" :
//         precioTotal= 1600
//     break
//     case "Chandon" :
//         precioTotal= 2100
//     break
// }

// let descuento01 = 0.2



// function descuento(){

//     return precioTotal - (precioTotal * descuento01) 
// }


// let precioFinal = descuento()


// console.log("el precio total de tu primera compra es de "+ precioFinal)




//SEGUNDA ENTREGA


let bebidasAlcohol = [];//0..1..2
let preciosBebidasAlcohol = [];

bebidasAlcohol[0]= "Fernet";
bebidasAlcohol[1]= "Cerveza";


console.log(bebidasAlcohol)

bebidasAlcohol.push("Gancia");
bebidasAlcohol.push("Vino");

console.log(bebidasAlcohol)

preciosBebidasAlcohol.push(1200) // en el indice 0 agrega este precio

bebidasAlcohol.pop();

//...................0.......1.......2
//bebidasAlcohol = [fernet,cerveza,gancia]

bebidasAlcohol.indexOf("Fernet")//..0
bebidasAlcohol.indexOf("Cerveza")//..1


class Bebidas01{

    constructor(id,nombre,precio,stock){
        this.id = id; 
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }

}

const bebida01 = new Bebidas01(001,"Fernet",1200,15);
const bebida02 = new Bebidas01(002,"Cerveza",350,25);
const bebida03 = new Bebidas01(003,"Vino",750,8);
const bebida04 = new Bebidas01(004,"Smirnoff",1600,10);

// console.log(bebida01);  //muestra toda la estructura


//..............0........1.........2........3
const bebidas = [bebida01,bebida02,bebida03,bebida04]; //ARRAY

console.log(bebidas);

//  2 formas para recorrer este array de objetos

for(let obj of bebidas){
    
    
    console.log(obj.nombre);

}

//segundo metodo

bebidas.forEach((el)=>{
    console.log(el.precio)
})



let carrito = [];

//para agregar cosas al carro, PUSH

carrito.push(bebidas[0]);

console.log(carrito)



let busqueda = prompt("busque su producto aqui").toUpperCase()

const resultado  = bebidas.find((el) => el.nombre.toUpperCase() == busqueda)

console.log(resultado)

if (busqueda == ""){
    alert("No ingresaste ningun producto")
}

let filtrarPrecio = parseInt(prompt("Indique cuanto desea gastar"))

const resultado2 = bebidas.filter((el) =>el.precio < filtrarPrecio)

console.log(resultado2)
