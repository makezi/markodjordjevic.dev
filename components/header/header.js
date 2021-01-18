import * as React from 'react';
import {
  Box,
  Container,
  Heading,
  Link,
  Spacer,
  Text,
  Button,
  Slide,
  Portal,
  Stack,
  useDisclosure,
  useBreakpoint
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const HEADER_HEIGHT = '100px';

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
        fontSize={['2xl', '2xl', 'lg']}
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breakpoint = useBreakpoint();

  React.useEffect(() => {
    if (breakpoint !== 'base' && breakpoint !== 'sm') {
      onClose();
    }
  }, [breakpoint, onClose]);

  const onToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <>
      <Box display={['block', 'block', 'none']}>
        <Button variant="ghost" onClick={onToggle}>
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </Button>
        <MobileMenu isOpen={isOpen} />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <Stack direction="row">
          <NavLink href="/blog" emote="📝">
            blog
          </NavLink>
          <NavLink href="/" emote="💁🏻‍♂️">
            about
          </NavLink>
        </Stack>
      </Box>
    </>
  );
}

function MobileMenu({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Slide
        direction="right"
        in
        style={{ zIndex: 'modal', top: HEADER_HEIGHT }}
      >
        <Box bg="white" height="100%" py={6}>
          <Stack align="center" spacing={4}>
            <NavLink href="/blog" emote="📝">
              blog
            </NavLink>
            <NavLink href="/" emote="💁🏻‍♂️">
              about
            </NavLink>
          </Stack>
        </Box>
      </Slide>
    </Portal>
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
      <Container
        maxW="4xl"
        px={[4, 4, 8]}
        height={HEADER_HEIGHT}
        display="flex"
        width="100%"
        alignItems="center"
      >
        <Heading size="md" as="h1">
          marko djordjevic
        </Heading>
        <Spacer />
        <Navigation />
      </Container>
    </Box>
  );
}

export { Header };
