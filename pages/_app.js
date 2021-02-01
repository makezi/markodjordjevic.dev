import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

import mdxComponents from '@/components/mdx-components';

import theme from '../styles/theme';

function GlobalStyles({ children }) {
  return (
    <>
      <CSSReset />
      {children}
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={mdxComponents}>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
