import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MudlabsUI',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.es.js' : 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'pixel-retroui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'pixel-retroui': 'PixelRetroUI',
        },
      },
    },
  },
})
