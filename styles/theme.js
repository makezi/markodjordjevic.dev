import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        fontFamily: 'body',
        fontSize: ['md', 'lg'],
        lineHeight: 'tall',
        color: mode('gray.700', 'gray.300')(props),
        bg: mode('white', 'darkBg')(props)
      }
    })
  },
  colors: {
    darkBg: '#0e1218'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 64
  },
  lineHeights: {
    tall: 1.7
  },
  fonts: {
    heading:
      'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
    body:
      'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif'
  },

  components: {
    Heading: {
      baseStyle: {
        letterSpacing: 'tight'
      },
      sizes: {
        '3xl': {
          fontSize: ['4xl', '5xl', '6xl'],
          lineHeight: 'short'
        },
        '2xl': {
          fontSize: ['3xl', '4xl', '5xl'],
          lineHeight: 'short'
        },
        xl: {
          fontSize: ['2xl', '3xl', '4xl'],
          lineHeight: 'short'
        },
        lg: {
          fontSize: ['xl', '2xl', '3xl']
        },
        md: {
          fontSize: ['lg', 'xl', '2xl'],
          lineHeight: 'base',
          fontWeight: 600
        }
      }
    }
  }
});

export default theme;
