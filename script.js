// PRODUCTOS INICIALES
let productos = [
  { id: 1, nombre: "Smartphone Pro", precio: 800, img: "https://picsum.photos/id/1/200" },
  { id: 2, nombre: "Audífonos BT", precio: 150, img: "https://picsum.photos/id/2/200" },
  { id: 3, nombre: "Reloj Fit", precio: 250, img: "https://picsum.photos/id/3/200" },
  { id: 4, nombre: "Teclado RGB", precio: 100, img: "https://picsum.photos/id/4/200" },
  { id: 5, nombre: "Mouse Gamer", precio: 50, img: "https://picsum.photos/id/5/200" },
  { id: 6, nombre: "Laptop Air", precio: 1200, img: "https://picsum.photos/id/6/200" },
  { id: 7, nombre: "Cámara Pro", precio: 900, img: "https://picsum.photos/id/7/200" }
];
// CARRITO
let carrito = [];

// MOSTRAR PRODUCTOS
function mostrarProductos() {
  const contenedor = document.getElementById("products");
  contenedor.innerHTML = "";

  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="agregarCarrito(${p.id})">
          Agregar al carrito
        </button>
      </div>
    `;
  });
}

// AGREGAR AL CARRITO
function agregarCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
  const lista = document.getElementById("cartItems");
  const total = document.getElementById("total");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach(item => {
    lista.innerHTML += `<li>${item.nombre} - $${item.precio}</li>`;
    suma += item.precio;
  });

  total.textContent = suma;
}

// PAGO (SIMULADO)
function pagar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  localStorage.setItem("ecommerce_cart", JSON.stringify(carrito));
  window.location.href = "checkout.html";
}

// MODAL
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// AGREGAR NUEVO PRODUCTO
function guardarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  if (nombre === "" || precio === "") {
    alert("Completa todos los campos");
    return;
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: parseFloat(precio)
  };

  productos.push(nuevoProducto);

  mostrarProductos();
  cerrarModal();

  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
}

// INICIO
mostrarProductos();