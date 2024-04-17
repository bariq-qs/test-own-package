import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import typescript from "rollup-plugin-typescript2"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // typescript({
    //   check: false,
    //   include: ["src/components/*.vue"],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       sourceMap: true,
    //       declaration: true,
    //       declarationMap: true,
    //     },
    //     exclude: ["vite.config.ts", "main.ts"],
    //   },
    // }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'PackageApollo',
      // the proper extensions will be added
      fileName: 'package-apollo',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  // server: {
  //   fs: {
  //     // Allow serving files from one level up to the project root
  //     allow: ['..'],
  //   },
  // },
})
