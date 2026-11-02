# Supermercado · Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado en React para el curso Desarrollo Frontend II (PFY2202), Experiencia 1 (semanas 1 y 2).

## Tecnologías

- React (Create React App)
- React Router v6: navegación entre páginas
- Context API + `useReducer`: estado global de los artículos
- Tailwind CSS v3: estilos

## Funcionalidades

- **Inicio:** panel de inventario con buscador, resumen (productos, stock bajo, agotados) y tabla con inventario inicial, recibido, enviado, disponible y estado.
- **Agregar artículo:** formulario para ingresar nombre, marca, tipo y stock inicial. El artículo queda disponible en todo el sitio.
- **Artículos:** tabla con todos los artículos registrados en el inventario.
- **Quiénes somos** y **Preguntas frecuentes:** páginas informativas.
- Los artículos que se agreguen para pruebas se guardan solo en memoria, al recargar el navegador se vuelve al listado original.

## Estructura

```
src/
├── components/   TopNav y BottomNav (menús de navegación)
├── context/      InventarioContext (estado global con useReducer)
└── pages/        Home, AgregarArticulo, ListaArticulos, QuienesSomos, PreguntasFrecuentes, NotFound
```

## Cómo ejecutarlo

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm start
```

La aplicación queda disponible en [http://localhost:3000](http://localhost:3000).