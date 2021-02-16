import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';

import mdxComponents from '@/components/mdx-components';
import theme from '@/styles/theme';
import prismTheme from '@/styles/prism-theme';

function GlobalStyles({ children }) {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${prismTheme}
        `}
      />
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
