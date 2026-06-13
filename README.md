<div align="center">

# ⚡ Mi Pokedex Pro 

*Práctica de Desarrollo Frontend - Analista Programador INACAP*

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PokeAPI](https://img.shields.io/badge/PokeAPI-FF0000?style=for-the-badge&logo=pokemon&logoColor=white)

</div>

---

## 📖 Contexto y Descripción del Proyecto

Esta aplicación web es el resultado de una práctica orientada al desarrollo moderno de interfaces de usuario. Consiste en una **Pokedex interactiva** que permite buscar, visualizar y capturar Pokémon utilizando datos reales obtenidos desde una API pública.

El objetivo principal de este proyecto es demostrar el dominio en el manejo de estados en React, la sincronización de datos con `localStorage` y el consumo de APIs externas mediante peticiones asíncronas (`async/await`), todo bajo un tipado estricto con TypeScript y estilizado con Tailwind CSS v4.

## ✨ Características Principales

- **Consumo de API Externa:** Conexión directa con la [PokeAPI](https://pokeapi.co/) para obtener datos precisos de cada Pokémon (ID, nombre, tipos, HP, Ataque y sprite oficial).
- **Persistencia de Datos:** Uso optimizado de `localStorage` mediante inicialización perezosa (Lazy Initialization) para asegurar que los Pokémon capturados no se pierdan al recargar la página.
- **Validaciones Integradas:** Manejo de errores mediante bloques `try/catch`, validación de campos vacíos y prevención de captura de Pokémon duplicados.
- **Diseño Moderno (UI/UX):** Interfaz estilizada estilo "Glassmorphism" con Tailwind CSS, incluyendo gradientes interactivos, estados de carga (botones deshabilitados durante la petición fetch) y animaciones de tarjetas.

## 🛠️ Estructura del Proyecto

El código está estructurado en componentes reutilizables y un archivo de tipos definido:

- `App.tsx`: Orquestador principal, maneja el estado global y la lógica de persistencia.
- `components/FormularioPokemon.tsx`: Componente encargado de la petición `fetch` a la PokeAPI.
- `components/ListaPokemon.tsx`: Renderiza la grilla de Pokémon.
- `components/PokemonCard.tsx`: Tarjeta individual de cada Pokémon con su respectivo diseño y estadísticas.
- `types/Pokemon.ts`: Contrato de datos de TypeScript para garantizar el tipado correcto en la aplicación.

## 🚀 Instalación y Ejecución local

Si deseas clonar y correr este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-de-tu-repositorio>
