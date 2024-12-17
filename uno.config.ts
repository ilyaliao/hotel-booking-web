import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'btn': 'text-black bg-white transition-duration-250 ease-in-out hover:(text-white bg-primary shadow-[inset_48vw_0_0_0_bf9d7d] text-white)',

      // ref: https://github.com/unocss/unocss/issues/2614
      'break-anywhere': '[@supports(overflow-wrap:anywhere)]:[overflow-wrap:anywhere] [@supports(overflow-wrap:anywhere)]:[word-break:normal]',
    },
  ],
  theme: {
    colors: {
      primary: '#bf9d7d',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Noto Serif TC',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
