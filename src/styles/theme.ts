import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  sizes: {
    xl: '1280px',
    lg: '1024px',
    md: '768px',
    sm: '640px'
  },
  colors: {
    bluePrimary: "#005BA2",
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        background: "gray.100",
        color: "black",
        overflowX: "hidden"
      }
    }
  }
})