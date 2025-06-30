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
yarn dev

# Compila para producción
yarn build

# Vista previa de producción
yarn preview

# Linter
yarn lint
```

## 📁 Estructura utilizada

pokemon-graphql/
├── public/                         # Archivos públicos accesibles directamente (favicon, SVGs, etc.)
│   ├── pokeball-colored.svg       # Ícono SVG de la Pokébola, usado como favicon o logo
│   └── favicon.ico                # Favicon general para la app
│
├── src/                           # Código fuente principal
│   ├── assets/                    # Imágenes, íconos u otros recursos estáticos
│
│   ├── components/                # Componentes reutilizables
│   │   ├── EvolutionChain/        # Muestra la cadena evolutiva de un Pokémon
│   │   │   └── index.jsx
│   │   ├── FilterInput/           # Input para búsqueda por nombre
│   │   │   └── index.jsx
│   │   ├── GenerationSelector/    # Selector de generación
│   │   │   └── index.jsx
│   │   ├── Layout/                # Componente base con header/footer
│   │   │   └── index.jsx
│   │   ├── PokemonCard/           # Tarjeta visual para cada Pokémon
│   │   │   └── index.jsx
│   │   ├── DrawerDetail/          # Drawer lateral con información detallada del Pokémon
│   │   │   └── index.jsx
│   │   └── StatsBar/              # Barra visual para stats base (HP, Attack, etc.)
│   │       └── index.jsx
│
│   ├── graphql/                   # Configuración de Apollo y queries GraphQL
│   │   ├── client.js              # Configuración del Apollo Client
│   │   └── queries.js             # Todas las consultas GraphQL organizadas
│
│   ├── pages/                     # Páginas principales del sitio
│   │   ├── Home.jsx               # Página principal con listado de Pokémon
│   │   ├── Detail.jsx             # Página de detalle del Pokémon
│   │   └── NotFound.jsx           # Página de error 404 personalizada
│
│   ├── styles/
│   │   └── index.css              # Estilos globales, importa Tailwind y personalizados
│
│   ├── App.jsx                    # Enrutamiento principal de la app
│   └── main.jsx                   # Punto de entrada, renderiza la app
│
├── .eslintrc.js / eslint.config.js  # Configuración de ESLint para mantener calidad de código
├── postcss.config.js             # Configuración de PostCSS usada por Tailwind
├── tailwind.config.js           # Configuración de Tailwind CSS
├── vite.config.js               # Configuración del bundler Vite
├── README.md                    # Documentación del proyecto
└── package.json                 # Dependencias, scripts y metadatos del proyecto

## 📦 Instalación

```bash
yarn install
```

## 👾 Vista previa

La app muestra una lista de Pokémon por generación, cada uno con su sprite, tipo(s), y permite ver su evolución y detalle ampliado al hacer clic.

---

## 🌐 Demo en producción

Este proyecto ha sido desplegado en [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform). Puedes ver el demo funcionando en:

🔗 [https://pokedex-2sqx9.ondigitalocean.app/](https://pokedex-2sqx9.ondigitalocean.app/)
