// theme.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // primary brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  wedding: {
    primary: '#E8C4C4',    // soft pink
    secondary: '#2C3639',  // dark gray
    accent: '#DBA39A',     // dusty rose
    light: '#F5EDDC',      // cream
  }
};

const fonts = {
  heading: 'Cormorant Garamond, serif',
  body: 'Inter, system-ui, sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'wedding.secondary'
      }
    }
  },
  components: {
    Button: {
      variants: {
        luxury: {
          bg: 'wedding.primary',
          color: 'wedding.secondary',
          fontFamily: 'heading',
          fontWeight: 'medium',
          letterSpacing: '1px',
          _hover: {
            bg: 'wedding.accent',
            transform: 'translateY(-2px)',
            boxShadow: 'lg'
          }
        }
      }
    }
  }
});

export default theme;