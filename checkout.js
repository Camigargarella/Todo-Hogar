document.addEventListener("DOMContentLoaded", () => {
    loadCart();

    // Cargar el carrito desde localStorage y mostrarlo
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');

        cartItemsContainer.innerHTML = ''; // Limpiar contenido previo
        let total = 0;

        cart.forEach(product => {
            const price = parseFloat(product.description.replace(/[^\d.-]/g, '')) || 0;
            const subtotal = price * product.quantity;
            total += subtotal;

            const productCard = document.createElement('div');
            productCard.classList.add('cart-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="cart-card-image">
                <div class="cart-card-details">
                    <h4>${product.title}</h4>
                    <p>Precio: $${price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span class="quantity-text">${product.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
                    <button class="remove-btn" onclick="removeProduct(${product.id})">Eliminar</button>
                </div>
            `;
            cartItemsContainer.appendChild(productCard);
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Actualizar cantidad de un producto
    window.updateQuantity = (productId, change) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.find(item => item.id === productId);

        if (product) {
            product.quantity += change;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId); // Eliminar si cantidad es 0
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    };

    // Eliminar un producto del carrito
    window.removeProduct = (productId) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);

        Swal.fire({
            title: "Producto eliminado",
            icon: "info",
            timer: 1000,
            showConfirmButton: false
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    };

    // Finalizar la compra
    window.finalizePurchase = () => {
        // Mostrar la alerta de agradecimiento
        Swal.fire({
            title: "Gracias por su compra",
            text: "Te contactaremos pronto.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            // Vaciar el carrito después de la compra
            localStorage.removeItem('cart'); 
            
            // Recargar el carrito vacío
            loadCart();
        });
    };

    // Volver al inicio
    window.goHome = () => {
        // Mostrar la alerta antes de redirigir
        Swal.fire({
            title: "Volviendo al inicio",
            text: "Vas a ser redirigido a la página principal.",
            icon: "info",
            confirmButtonText: "Aceptar"
        }).then(() => {
            // Redirigir a la página principal
            window.location.href = '../index.html'; 
        });
    };
});
