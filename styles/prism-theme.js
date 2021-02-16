import { css } from '@emotion/react';
import { theme } from '@chakra-ui/react';
import materialPalenightTheme from 'prism-material-themes/themes/material-palenight.css';

export default css`
  ${materialPalenightTheme}

  /* Code blocks */
  code[class*="language-"],
  pre[class*="language-"] {
    font-size: 16px;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: ${theme.space[4]};
    overflow: auto;
    margin: ${theme.space[10]} 0;
    min-width: 100%;
    white-space: nowrap;

    @media screen and (min-width: 62em) {
      margin: ${theme.space[10]} -80px;
    }
  }
`;
