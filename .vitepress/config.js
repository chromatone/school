import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
  presetTypography
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Creative Multimedia School",
  description: "Visual Music Language in-person mixed level group education",
  transformHead({ pageData }) {
    return [
      process.env.NODE_ENV === "production" && ["script", { async: true, defer: true, "data-website-id": "affdbc47-302e-4d63-8d92-eb1acf60e113", src: "https://stats.chromatone.center/script.js" }],

      ["link", { rel: "icon", type: "image/jpg", href: "https://school.chromatone.center/icon.jpg" }],
      ["meta", { name: "author", content: "davay42" }],
      ["meta", { name: "keywords", content: "color, music, stickers, posters, theory, webapp, science" }],
      ["meta", { name: "theme-color", content: '#cccccc' }],
      ['meta', { property: 'og:title', content: pageData.title + ' | Chromatone School' }],
      ['meta', { property: 'og:description', content: pageData.description }],
      ['meta', { property: 'og:url', content: "https://school.chromatone.center/" + pageData.relativePath.split('index.md')[0] }],
      ['meta', { property: 'og:image', content: `https://school.chromatone.center/preview.png` }],
      ['meta', { name: 'twitter:title', content: pageData.title + ' | Chromatone School' }],
      ['meta', { name: 'twitter:description', content: pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@davay42` }],
      ['meta', { name: 'twitter:creator', content: `@davay42` }],
      ['meta', { name: 'twitter:image', content: `https://school.chromatone.center/preview.png` }],
    ]
  },
  vite: {
    plugins: [
      UnoCSS({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            // cdn: 'https://esm.sh/',
            scale: 1.2,
            extraProperties: {
              "vertical-align": "middle",
            },
          }),
          presetUno(),
          presetTypography(),
        ],
        extractors: [extractorSplit, extractorPug()],
      }),
    ],
  }

})



