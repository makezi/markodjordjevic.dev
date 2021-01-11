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
        py={2}
        px={4}
        fontFamily="heading"
        fontWeight="medium"
        letterSpacing="-1px"
        display="flex"
        alignItems="center"
        color={activeLink ? 'black' : 'gray.500'}
        transition="0.15s all ease"
        role="group"
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
        blog
      </NavLink>
      <NavLink href="/" emote="💁🏻‍♂️">
        about
      </NavLink>
    </Flex>
  );
}

function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      sx={{ backdropFilter: 'blur(20px)' }}
      bg="whiteAlpha.700"
    >
      <Container maxW="4xl" p={[4, 4, 8]}>
        <Flex alignItems="center">
          <Heading size="lg" as="h1">
            marko djordjevic
          </Heading>
          <Spacer />
          <Navigation />
        </Flex>
      </Container>
    </Box>
  );
}

export { Header };
