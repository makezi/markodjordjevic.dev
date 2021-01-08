import { Box, Container, Heading, Link, Flex, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

function Navigation() {
  return (
    <NextLink href="/about">
      <Link href="/about">About</Link>
    </NextLink>
  );
}

function Header() {
  return (
    <Box as="header" py={8}>
      <Container maxW="3xl">
        <Flex alignItems="center">
          <Heading size="xl" as="h1">
            Marko Djordjevic
          </Heading>
          <Spacer />
          <Navigation />
        </Flex>
      </Container>
    </Box>
  );
}

export { Header };
