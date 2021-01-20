import * as React from 'react';
import {
  Box,
  Container,
  Heading,
  Link,
  Spacer,
  Text,
  Flex,
  Stack,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

import { IconButton } from '@/components/icon-button';

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

function MobileNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={['block', 'block', 'none']}>
      <IconButton
        ref={btnRef}
        aria-label="Open Navigation Menu"
        icon={<HiMenuAlt3 size={30} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerBody py={6} px={4}>
            <Stack spacing={6}>
              <Flex justifyContent="flex-end">
                <IconButton
                  aria-label="Close Navigation Menu"
                  icon={<HiX size={30} />}
                  onClick={onClose}
                />
              </Flex>
              <Stack align="flex-end" spacing={4}>
                <NavLink href="/blog" emote="📝">
                  blog
                </NavLink>
                <NavLink href="/" emote="💁🏻‍♂️">
                  about
                </NavLink>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
        <DrawerOverlay />
      </Drawer>
    </Box>
  );
}

function DesktopNavigation() {
  return (
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
  );
}

function Navigation() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
}

function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      sx={{ backdropFilter: 'blur(10px)' }}
      bg="whiteAlpha.700"
    >
      <Container
        maxW="4xl"
        px={[4, 4, 8]}
        py={6}
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
