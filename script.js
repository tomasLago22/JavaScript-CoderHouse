


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


// let bebidasAlcohol = [];//0..1..2
// let preciosBebidasAlcohol = [];

// bebidasAlcohol[0]= "Fernet";
// bebidasAlcohol[1]= "Cerveza";


// console.log(bebidasAlcohol)

// bebidasAlcohol.push("Gancia");
// bebidasAlcohol.push("Vino");

// console.log(bebidasAlcohol)

// preciosBebidasAlcohol.push(1200) // en el indice 0 agrega este precio

// bebidasAlcohol.pop();

// //...................0.......1.......2
// //bebidasAlcohol = [fernet,cerveza,gancia]

// bebidasAlcohol.indexOf("Fernet")//..0
// bebidasAlcohol.indexOf("Cerveza")//..1


// class Bebidas01{

//     constructor(id,nombre,precio,stock){
//         this.id = id; 
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;

//     }

// }

// const bebida01 = new Bebidas01(001,"Fernet",1200,15);
// const bebida02 = new Bebidas01(002,"Cerveza",350,25);
// const bebida03 = new Bebidas01(003,"Vino",750,8);
// const bebida04 = new Bebidas01(004,"Smirnoff",1600,10);

// // console.log(bebida01);  //muestra toda la estructura


// //..............0........1.........2........3
// const bebidas = [bebida01,bebida02,bebida03,bebida04]; //ARRAY

// console.log(bebidas);

// //  2 formas para recorrer este array de objetos

// for(let obj of bebidas){
    
    
//     console.log(obj.nombre);

// }

// //segundo metodo

// bebidas.forEach((el)=>{
//     console.log(el.precio)
// })



// let carrito = [];

// //para agregar cosas al carro, PUSH

// carrito.push(bebidas[0]);

// console.log(carrito)



// let busqueda = prompt("busque su producto aqui").toUpperCase()

// const resultado  = bebidas.find((el) => el.nombre.toUpperCase() == busqueda)

// console.log(resultado)

// if (busqueda == ""){
//     alert("No ingresaste ningun producto")
// }

// let filtrarPrecio = parseInt(prompt("Indique cuanto desea gastar"))

// const resultado2 = bebidas.filter((el) =>el.precio < filtrarPrecio)

// console.log(resultado2)



//TERCERA ENTREGA 



const conAlcohol = [
    {
    id:1,
    nombre:"Fernet",
    precio:1500,
    stock:25
    },
    {
    id:2,
    nombre:"Smirnoff",
    precio:1200,
    stock:15
    },
    {
    id:3,
    nombre:"Malibu",
    precio:1900,
    stock:18
    },
    {
    id:4,
    nombre:"Heineken Pack X6",
    precio:1600,
    stock:10
    },
]





const sinAlcohol = [
    {
        id: 1,
        nombre: "Coca-Cola",
        precio: 470,
        stock: 25
    },
    {
        id:2,
        nombre: "Sprite",
        precio: 450,
        stock: 20
    },
    {
        id:3,
        nombre: "Baggio",
        precio: 250,
        stock: 12
    },
    {
        id:4,
        nombre: "Fresh pomelo",
        precio: 190,
        stock: 30
    }
]

let carrito = [];

let carritoDos =[];


let contenedorProductos = document.getElementById("contenedorProductos")

sinAlcohol.forEach((product)=>{

   let contenedor = document.createElement("div")
    contenedor.className= "contenedor"
    
    contenedor.innerHTML = `
    <h3>${product.nombre} </h3>
    <p>${product.precio} </p>
    `;

    contenedorProductos.append(contenedor)
    

let comprar = document.createElement("button")
comprar.innerText = "Comprar"

contenedor.append(comprar)

comprar.addEventListener("click",()=>{
    
    carrito.push(
        
        {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          stock: product.stock
        }
      )
      console.log(carrito)
    })
})


 comprarDos = document.getElementsByClassName(".swal2-confirm swal2-style")


comprarDos.setAttribute("id" , "idPrueba")

comprarDos.addEventListener("click",()=>{
    
    carrito.push(
        
        {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          stock: product.stock
        }
      )
      console.log(carrito)
    })









let btn2 = document.getElementById( "#btn2");

let todos = document.querySelectorAll("#btn2");
    
    

todos.forEach((todo)=>{
    todo.addEventListener('click',llamarBoton2);

function llamarBoton2(){
    Swal.fire({
        title: "Confirmar Compra",
        text: "Desas sumar al carrito?",
        icon: "success",
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText:"Confirmar",
        
        
    })
}
    
});


//STORAGE


