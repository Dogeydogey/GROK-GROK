import React from 'react'
import image from './logo.png'

export default {
  name: 'Dice',
  short_name: 'dice',
  description: `
    vreator:DXh5UPE3HVtjzjhiMGjWoTRjAb5PdcXRNekFdFBii6fx
  `,
  image,
  theme_color: 'rgb(255 100 144)',
  app: React.lazy(() => import('./App')),
}
