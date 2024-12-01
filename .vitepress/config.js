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
  description: "Your hub for innovative multimedia  education and creative collaboration",
  vite: {
    plugins: [
      UnoCSS({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            cdn: 'https://esm.sh/',
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



