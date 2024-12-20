

document.addEventListener("DOMContentLoaded", () => {
    fetchData();

    // Función para cargar los datos del archivo JSON
    async function fetchData() {
        try {
            const response = await fetch('./data.json');
            const data = await response.json();

            const cardsContainer = document.querySelector('.cards');
            cardsContainer.innerHTML = ''; // Limpiamos el contenido antes de cargar nuevos productos

            data.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="card-body">
                        <h3 class="card-title">${product.title}</h3>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn">DETALLES</a>
                        <a href="#" class="btn buy-btn" onclick="handleBuy(${product.id})">COMPRAR</a>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });

            Swal.fire({
                title: "Productos cargados exitosamente",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });

        } catch (error) {
            console.error("Error fetching data:", error);

            Swal.fire({
                title: "Error al cargar productos",
                text: "Hubo un problema al obtener los datos del servidor.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    }

    // Función para manejar la compra de un producto
    window.handleBuy = (productId) => {
        fetch('./data.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);

                // Obtener el carrito actual del localStorage
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Verificar si el producto ya está en el carrito
                const existingProduct = cart.find(item => item.id === productId);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }

                // Guardar el carrito actualizado en localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                Swal.fire({
                    title: "Producto agregado al carrito",
                    text: `${product.title} ha sido añadido al carrito.`,
                    icon: "success",
                    confirmButtonText: "Ir al carrito",
                    showCancelButton: true,
                    cancelButtonText: "Seguir comprando",
                }).then(result => {
                    if (result.isConfirmed) {
                        window.location.href = './checkout.html';
                    }
                });
            });
    };
});
