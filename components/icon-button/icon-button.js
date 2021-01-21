import { IconButton as ChakraIconButton } from '@chakra-ui/react';

export function IconButton(props) {
  return (
    <ChakraIconButton
      variant="ghost"
      minWidth={0}
      aria-label="Close Navigation Menu"
      {...props}
    />
  );
}
