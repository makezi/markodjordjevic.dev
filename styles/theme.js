import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: 'lg',
      },
    },
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
    '6xl': 64,
  },
  fonts: {
    heading:
      'Poppins,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
    body:
      'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
  },
  fontWeights: {
    bold: 800,
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: '-1px',
      },
      sizes: {
        '3xl': {
          fontSize: ['4xl', '5xl', '6xl'],
        },
      },
    },
  },
});

export default theme;
