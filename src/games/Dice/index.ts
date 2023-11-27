import React from 'react'
import image from './logo.png'

export default {
  name: 'Dice',
  short_name: 'dice',
  description: `
  creator 
  `,
  image,
  theme_color: 'rgb(255 100 144)',
  app: React.lazy(() => import('./App')),
}
