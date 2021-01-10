import {
  Box,
  Container,
  Heading,
  Link,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function NavLink({ href, emote, children }) {
  const { asPath } = useRouter();
  const activeLink = asPath === href;

  return (
    <NextLink href={href}>
      <Link
        href={href}
        fontWeight="medium"
        py={2}
        px={4}
        fontSize="md"
        display="flex"
        alignItems="center"
        role="group"
        color={activeLink ? 'black' : 'gray.500'}
        transition="0.15s all ease"
        _hover={{ textDecoration: 'none', color: 'black' }}
        _focus={{ outline: 'none' }}
      >
        <Text
          pr={2}
          fontSize="3xl"
          opacity={activeLink ? 1 : 0}
          _groupHover={{ opacity: 1 }}
          transition="0.15s all ease"
        >
          {emote}
        </Text>
        {children}
      </Link>
    </NextLink>
  );
}

function Navigation() {
  return (
    <Flex>
      <NavLink href="/blog" emote="📝">
        Blog
      </NavLink>
      <NavLink href="/" emote="💁🏻‍♂️">
        About
      </NavLink>
    </Flex>
  );
}

function Header() {
  return (
    <Box as="header">
      <Container maxW="4xl" px={8} py={16}>
        <Flex alignItems="center">
          <Heading size="md" as="h1">
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
