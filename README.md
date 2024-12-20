# **Todo Hogar**

**Todo Hogar** es una tienda en línea especializada en productos de decoración para el hogar, con un enfoque principal en cortinas y accesorios decorativos de alta calidad. Nuestro objetivo es ofrecer una experiencia de compra sencilla y accesible, permitiendo a los clientes disfrutar de opciones de pago en cuotas sin interés y contar con atención personalizada. Este repositorio contiene los archivos fundamentales de la página web de **Todo Hogar**, que incluyen HTML, CSS, y elementos interactivos.

## **Descripción del Proyecto**

La página web de **Todo Hogar** ha sido diseñada con el objetivo de ofrecer una experiencia de usuario intuitiva, moderna y fácil de navegar. Está optimizada para facilitar la compra de productos para el hogar, con secciones clave como categorías de productos, información de compra, testimonios de clientes, y más.

### **Características Principales:**

1. **Página de Inicio**: Destaca los productos más populares y ofrece opciones para ver detalles y realizar compras.
2. **Categorías**: Página dedicada a las diversas categorías de productos como cortinas blackout, roller, bandas verticales, y paneles orientales.
3. **Cómo Comprar**: Explicación clara y detallada sobre el proceso de compra en línea.
4. **Contacto**: Formulario de contacto integrado con [Formspree](https://formspree.io/) para facilitar la comunicación.
5. **Reseñas**: Testimonios de clientes satisfechos con los productos de **Todo Hogar**.
6. **Quiénes Somos**: Información sobre la empresa, su misión y valores.

## **Estructura del Proyecto**

El proyecto está dividido en varias páginas HTML interconectadas, con una estructura de carpetas organizada para los archivos de estilo, imágenes y recursos adicionales.

### **Archivos Principales:**

- **index.html**: Página de inicio con los productos destacados.
- **categorias.html**: Página que muestra las distintas categorías de productos disponibles.
- **comocomprar.html**: Explicación sobre cómo realizar compras en línea.
- **contacto.html**: Formulario de contacto para consultas.
- **reseñas.html**: Página de reseñas y testimonios de clientes.
- **quienessomos.html**: Información acerca de la empresa.

### **Estructura de Recursos:**

- **assets/imagenes/**: Contiene las imágenes usadas en el sitio, como logotipos y banners.
- **css/**: Archivos CSS para estilizar las páginas web. Incluye estilos específicos para cada sección.
- **js/**: Archivos JavaScript que gestionan interacciones dinámicas como el manejo del carrito de compras y la carga de productos desde un archivo JSON.

### **Fuentes y Librerías:**

- **Google Fonts**: Se utiliza la fuente `Roboto` para el texto principal del sitio.
- **Font Awesome**: Para íconos sociales y botones interactivos.
- **Formspree**: Para gestionar formularios de contacto de manera fácil y eficiente.

## **Instalación**

Sigue estos pasos para ver el sitio web en tu entorno local:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/todo-hogar.git
    ```

2. **Abre el archivo `index.html`** en tu navegador preferido.

    Una vez que abras el archivo, podrás navegar entre las distintas páginas utilizando el menú de navegación que se encuentra en la parte superior de la página.

### **Requisitos:**

- No se requieren dependencias externas para ver el sitio. Sin embargo, para ejecutar funcionalidades dinámicas (como agregar productos al carrito), asegúrate de que el navegador soporte JavaScript y que tengas conexión a Internet para cargar los recursos externos.

## **Funcionalidades del Proyecto**

- **Carga de Productos**: Los productos se cargan dinámicamente desde un archivo JSON (`data.json`), lo que permite la actualización sencilla del catálogo.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, actualizar las cantidades y eliminar productos, con los cambios reflejados en el almacenamiento local (`localStorage`).
- **Finalizar Compra**: Después de agregar productos al carrito, los usuarios pueden proceder con la compra, lo que genera una confirmación mediante alertas interactivas.
- **Interacción con el Usuario**: Se utiliza `SweetAlert2` para mostrar alertas de confirmación e información interactivas, tales como la confirmación de adición de productos al carrito, eliminaciones, y mensajes de agradecimiento.

## **Tecnologías Utilizadas**

- **HTML**: Estructura básica del sitio web.
- **CSS**: Estilos para diseñar el sitio de forma moderna y responsiva.
- **JavaScript**: Interacciones dinámicas como la carga de productos y el manejo del carrito de compras.
- **SweetAlert2**: Para generar alertas de confirmación e información interactivas.
- **Formspree**: Para gestionar el formulario de contacto.
