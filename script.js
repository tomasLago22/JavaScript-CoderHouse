


let usuario = prompt("ingrese su nombre de usuario");

let pass = prompt("ingrese su contraseña")




if(usuario == "" || (pass == "")) {
    alert("No ingresaste nombre de usuario o contraseña")
}



let edad = Number(prompt("ingrese su edad"));

if(edad<18){
    alert("Mostrar bebidas sin alcohol");

}else if(edad>=18){
    alert("Mostrar tienda completa");
}


let compras = prompt("Ingrese el producto que quiera llevar")

do{
    if(compras == "Fernet" || compras == "Cerveza" || compras == "Smirnof" ||compras == "Chandon" ||compras == "Vodka" ||compras == "Champagne")

    alert("Agregaste " + compras + "al carrrito")
    

}while ((compras == "esc") || (compras == ""));



alert("por ser tu primer compra te regalamos un descuento del 20% en tu primer bebida")

let productos = prompt("ingrese su primer compra aqui")


switch(productos){
    case "Fernet" :
        precioTotal= 1200
    break
    case "Cerveza" :
        precioTotal= 320
    break
    case "Smirnof" :
        precioTotal= 1600
    break
    case "Chandon" :
        precioTotal= 2100
    break
}

let descuento01 = 0.2



function descuento(){

    precioTotal = precioTotal - (precioTotal * descuento01) 
}

descuento()

console.log("el precio total de tu primera compra es de "+ precioTotal)








