Una Pokédex hecha en React que consume la API de [GraphQL PokeAPI](https://graphql.pokeapi.co/). Permite buscar Pokémon, ver sus estadísticas, tipos, habilidades, y cadena evolutiva.

## 🚀 Tecnologías usadas

- [React 19](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (para animaciones)
- [Vite](https://vitejs.dev/) (como bundler)
- [ESLint](https://eslint.org/) (para linting)

## 🧩 Características

- Visualización de una lista de Pokémon por generación
- Filtro por nombre
- Visualización de imagen, tipo, estadísticas y habilidades
- Indicadores de si el Pokémon es bebé o mítico
- Cadena evolutiva con navegación visual
- Diseño responsive y estilizado con Tailwind

## 🔧 Scripts disponibles

```bash
# Ejecuta la app en modo desarrollo
npm run dev

# Compila para producción
npm run build

# Vista previa de producción
npm run preview

# Linter
npm run lint
```

## 📁 Estructura recomendada

- `components/`: Componentes reutilizables como tarjetas, selector de generación, etc.
- `graphql/queries/`: Consultas GraphQL organizadas por funcionalidad
- `pages/`: Vistas principales (lista y detalle de Pokémon)
- `App.jsx`: Enrutador y layout base

## 📦 Instalación

```bash
npm install
```

## 👾 Vista previa

La app muestra una lista de Pokémon por generación, cada uno con su sprite, tipo(s), y permite ver su evolución y detalle ampliado al hacer clic.

---

## 🌐 Demo en producción

Este proyecto ha sido desplegado en [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform). Puedes ver el demo funcionando en:

🔗 [https://pokedex-2sqx9.ondigitalocean.app/](https://pokedex-2sqx9.ondigitalocean.app/)

