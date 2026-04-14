// Obtener carrito desde localStorage
const cartData = localStorage.getItem('ecommerce_cart');
let cart = cartData ? JSON.parse(cartData) : [];

// Elementos del DOM
const checkoutItemsContainer = document.getElementById('checkout-items');
const finalTotalElement = document.getElementById('final-total');
const paymentForm = document.getElementById('payment-form');
const successMessage = document.getElementById('success-message');

// Validar si el carrito está vacío
if (cart.length === 0) {
    alert("No hay productos en tu carrito.");
    window.location.href = "index.html";
}

// Mostrar productos en el resumen
function renderSummary() {
    checkoutItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.precio;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("checkout-item");

        itemDiv.innerHTML = `
            <span>${item.nombre}</span>
            <span>$${item.precio.toFixed(2)}</span>
        `;

        checkoutItemsContainer.appendChild(itemDiv);
    });

    finalTotalElement.innerText = total.toFixed(2);
}

// Simular pago
paymentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Validación básica
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const card = document.getElementById("card").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (!name || !address || !card || !expiry || !cvv) {
        alert("Por favor completa todos los campos");
        return;
    }

    // Simulación de pago
    document.querySelector(".pay-btn").style.display = "none";
    successMessage.classList.remove("hidden");

    // Limpiar carrito
    localStorage.removeItem("ecommerce_cart");

    // Redirigir después de 3 segundos
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});

// Inicializar
renderSummary();