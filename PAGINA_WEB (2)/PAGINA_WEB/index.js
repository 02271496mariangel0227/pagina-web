document.addEventListener("DOMContentLoaded", function () {
    /* const buttons = document.querySelectorAll('.comprar-btn');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const item = button.parentElement.parentElement;
        const title = item.querySelector('p').textContent;
        const price = item.querySelector('.precio').textContent;
        const imgSrc = item.parentElement.querySelector('img').src;
        
        // Aquí puedes hacer lo que quieras con la información, por ejemplo, agregar el producto al carrito
        console.log(`Añadido al carrito: ${title} ${price}`);
    } */
    pintar()

});


let productosLenceria = [
    {
        nombre: "BABY DOLL SEXI",
        precio: 80.000,
        imagen: "./producto1.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica",

    },
    {
        nombre: "BABY DOLL SWEET",
        precio: 199,
        imagen: "./producto2.jpg",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "DUO ATRAXION",
        precio: 199,
        imagen: "./producto3.jpg",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "CARMECI",
        precio: 199,
        imagen: "./producto4.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "NOCHE AZUL",
        precio: 199,
        imagen: "./producto5.jpg",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "BODY RED VELVET",
        precio: 199,
        imagen: "./producto6.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "ROJO MAC´KOI",
        precio: 199,
        imagen: "./producto7.jpg",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "CORCE SNOW",
        precio: 199,
        imagen: "./producto8.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "SEXI SHADOW",
        precio: 199,
        imagen: "./producto9.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },
    {
        nombre: "TRIO LEJENDARY",
        precio: 199,
        imagen: "./producto10.jfif",
        descripcion: "algodon-poliester",
        talla: "Unica"
    },

]


function pintar() {
    productosLenceria.forEach((item, index) => {
        let card = document.createElement("div")
        let imagen = document.createElement("img")
        imagen.src = item.imagen
        card.appendChild(imagen)
        let div = document.createElement("div")
        div.classList = "informacion"
        card.appendChild(div)
        let parrafo = document.createElement("p")
        parrafo.textContent = item.nombre
        div.appendChild(parrafo)
        let precio = document.createElement("p")
        precio.textContent = item.precio
        div.appendChild(precio)
        let descripcion = document.createElement("p")
        descripcion.textContent = item.descripcion
        div.appendChild(descripcion)
        let talla = document.createElement("p")
        talla.textContent = item.talla
        div.appendChild(talla)


             











        document.getElementById("contenedor").appendChild(card)

    })
}
