import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  adapter: netlify(),
})
