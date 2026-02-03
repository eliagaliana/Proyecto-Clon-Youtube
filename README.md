# 🎥 YouTube Clone - Proyecto Frontend 🔴

Este proyecto es una réplica funcional de la interfaz principal de YouTube, desarrollada como práctica avanzada de desarrollo web. Se ha construido bajo la metodología **Mobile First**, asegurando que la experiencia sea fluida desde dispositivos móviles hasta pantallas de escritorio de alta resolución.

A diferencia de una maquetación estática, este proyecto incorpora **JavaScript** para dotar de interactividad a la interfaz y renderizar contenido de manera dinámica.

## 🏗️ Funcionalidades y Estructura

El desarrollo simula la experiencia de usuario de la plataforma original mediante las siguientes secciones:

- **Header Responsivo:** Barra de navegación superior con buscador, iconos de notificaciones y perfil. Incluye lógica JS para el funcionamiento de la barra de búsqueda visual.
- **Sidebar Dinámico (Menú Lateral):** - Versión móvil: Menú oculto.
  - Versión escritorio: Menú lateral colapsable controlado mediante **JavaScript** (toggle button).
- **Grid de Videos (Feed Principal):** - Maquetación compleja utilizando **CSS Grid** y **Flexbox**.
- **Categorías (Chips):** Barra de filtros horizontal.

## 📂 Estructura del Archivo

La organización del código sigue las buenas prácticas de separación de responsabilidades:

- `index.html` → Contenedor principal y estructura semántica.
- `/css/styles.css` → Estilos globales y Media Queries.
- `/css/reset.css` → Reseteo de propiedades de los componentes.
- `/js/script.js` → Lógica de la aplicación: manejo de eventos y generación de HTML dinámico.
- `/images/img` → Iconos SVG y placeholders para las miniaturas.
- `README.md` → Documentación del proyecto.

## 🧰 Tecnologías Utilizadas

- **HTML5:** Uso intensivo de etiquetas semánticas (`<nav>`, `<article>`, `<aside>`).
- **CSS3:** - **Mobile First:** Estilos base para móvil, escalados con `min-width`.
  - **CSS Grid & Flexbox:** Para la alineación precisa de elementos.
- **JavaScript (ES6+):**
  - **Event Listeners** para la interactividad.

## 📈 Resultados Destacados

- 📱 **Adaptabilidad Total:** El layout cambia drásticamente entre móvil (1 columna) y escritorio (3-4 columnas) sin romper el diseño.
- ⚡ **Interactividad:** El menú hamburguesa y los efectos de _hover_ proporcionan una experiencia de usuario realista.

## 📝 Conclusiones

Este clon de YouTube combina la estética con la funcionalidad lógica. **El proyecto refleja la importancia de un diseño limpio, jerarquizado y adaptable, principios fundamentales para el desarrollo web moderno, potenciados por la interactividad que ofrece JavaScript.**

## 📧 Contacto

¿Tienes sugerencias para optimizar el código JS o los estilos? ¡Hablemos!

- **Autor:** Elia Galiana Sanabria
- **LinkedIn:** www.linkedin.com/in/elia-galiana-sanabria-74992431a
- **Portfolio:** https://eliagaliana.github.io/elia-galiana.github.io/
