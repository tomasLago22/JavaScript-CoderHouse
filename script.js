


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
    stock:25,
    img: "img/Fernet(22).png"
    },
    {
    id:2,
    nombre:"Smirnoff",
    precio:1200,
    stock:15,
    img: "img/Smirnof (10).png"
    },
    {
    id:3,
    nombre:"Malibu",
    precio:1900,
    stock:18,
    img: "img/Malibu(7).png"
    },
    {
    id:4,
    nombre:"Heineken Pack X6",
    precio:1600,
    stock:10,
    img: "img/pngocean.com (13).png"
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
let btnCarrito = document.getElementById("verCarrito")


document.addEventListener("DOMContentLoaded", () => {
    let storageCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
    carrito = storageCarrito != null ? storageCarrito : [];
    cargarConAlcohol();
    btnCarrito.innerText = `Carrito (${carrito.length})`

 })


let contenerProdConAlcohol = document.getElementById("contenedorAlcohol");

function cargarConAlcohol(){

    contenerProdConAlcohol.innerHTML = "";

    conAlcohol.forEach((producto)=>{

        contenerProdConAlcohol.innerHTML += `
        <div class="col-3">
            <div class="card productCard">
              <img src="${producto.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" id="${producto.id}" class="btn btn-primary btn2">Comprar</a>
              </div>
            </div>
          </div>
        
        `



    
    })

    let comprarBtn = document.querySelectorAll(".btn2");


comprarBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        comprarProducto(e.currentTarget.id);
    })
})

}

cargarConAlcohol();




function comprarProducto(id){

    const idProducto = parseInt(id);
    const producto = conAlcohol.find(pr => pr.id === idProducto);


    carrito.push(
        
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock
        }
      )

    console.log(`Agregaste: ${producto.nombre} a tu carro de compras!`)

    btnCarrito.textContent = `Carrito (${carrito.length})`

    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}


const contenedorCarrito = document.getElementById("contentCarrito")

function carritoCompleto(){

contenedorCarrito.innerHTML=""
carrito.forEach((producto)=>{
let carritoContenido = document.createElement("div")
carritoContenido.className="card"
carritoContenido.style.width = "10%"
 
carritoContenido.innerHTML=`
<img src="${producto.img}"/>
<h3>${producto.nombre}</h3>
<p>${producto.precio}<p>
<button class="delete-producto btn btn-danger">Eliminar</button>
`;

contenedorCarrito.append(carritoContenido)
})
  
  
}

carritoCompleto()