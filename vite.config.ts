import { defineConfig } from 'vite'; 

// https://vite.dev/config/
export default defineConfig({
  // Repo "funciones" → la web se sirve en https://TU_USUARIO.github.io/funciones/
  // La base SIEMPRE lleva el nombre del repo delante (con / al inicio y al final).
  base: '/funciones/',
  build: {
    // Carpeta que GitHub Pages publicará (la genera "npm run build")
    outDir: 'dist',
    sourcemap: false,
  },
});