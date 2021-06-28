import path from 'path'
import { defineConfig } from 'vite'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'useUnmountSignal'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  plugins: [
    typescript({
      check: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          declaration: true,
          declarationMap: true
        }
      }
    })
  ]
})