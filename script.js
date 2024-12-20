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
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Función que se activa al hacer click en "Comprar"
    window.handleBuy = (productId) => {
        const confirmAction = confirm("¿Quieres finalizar la compra o seguir viendo?");
        if (confirmAction) {
            // Redirige a la página de compra
            window.location.href = `./checkout.html?productId=${productId}`;
        } else {
            alert("Sigues viendo productos.");
        }
    };
});
