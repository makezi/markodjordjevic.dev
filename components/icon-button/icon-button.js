import * as React from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';

export const IconButton = React.forwardRef((props, ref) => (
  <ChakraIconButton ref={ref} variant="ghost" width={10} {...props} />
));

IconButton.displayName = 'IconButton';
