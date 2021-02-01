import * as React from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  Spacer,
  Text,
  Stack,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HiMenuAlt3, HiX, HiMoon, HiOutlineMoon } from 'react-icons/hi';

import { IconButton } from '@/components/icon-button';
import { startsWith } from '@/utils/starts-with';

function useActiveLink(href) {
  const { pathname } = useRouter();
  const isCurrent = pathname === href;
  const isPartiallyCurrent = href !== '/' && startsWith(pathname, href);
  const isActiveLink = isCurrent || isPartiallyCurrent;

  return isActiveLink;
}

function NavLink({ href, ...props }) {
  const activeColor = useColorModeValue('gray.800', 'gray.300');
  const activeBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const isActiveLink = useActiveLink(href);

  return (
    <NextLink href={href}>
      <Button
        as="a"
        href={href}
        variant="ghost"
        fontFamily="heading"
        fontSize={['xl', 'xl', 'lg']}
        width={['100%', '100%', 'auto']}
        fontWeight="medium"
        letterSpacing="-1px"
        color={isActiveLink ? activeColor : 'gray.500'}
        bg={isActiveLink ? activeBg : 'transparent'}
        _hover={{ color: activeColor, bg: activeBg }}
        {...props}
      />
    </NextLink>
  );
}

function ToggleColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton onClick={toggleColorMode} p={2} aria-label="Toggle Dark Mode">
        <Text fontSize="2xl">
          {colorMode === 'light' ? (
            <HiOutlineMoon size={30} />
          ) : (
            <HiMoon size={30} />
          )}
        </Text>
      </IconButton>
    </header>
  );
}

function MobileNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('whiteAlpha.700', 'darkBg');
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
        <DrawerContent height="100% !important">
          <DrawerHeader
            bg={bg}
            py={6}
            px={4}
            display="flex"
            justifyContent="flex-end"
          >
            <IconButton
              aria-label="Close Navigation Menu"
              icon={<HiX size={30} />}
              onClick={onClose}
            />
          </DrawerHeader>

          <DrawerBody py={10} px={4} bg={bg}>
            <Stack align="flex-end" spacing={4}>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/">About</NavLink>
            </Stack>
          </DrawerBody>

          <DrawerFooter py={6} px={4} bg={bg}>
            <ToggleColorModeButton />
          </DrawerFooter>
        </DrawerContent>
        <DrawerOverlay />
      </Drawer>
    </Box>
  );
}

function DesktopNavigation() {
  return (
    <Box display={['none', 'none', 'block']}>
      <Stack direction="row" spacing={8} align="center">
        <Stack direction="row" spacing={4} align="center">
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/">About</NavLink>
        </Stack>
        <ToggleColorModeButton />
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
  const bg = useColorModeValue('whiteAlpha.800', 'darkBg');

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      sx={{ backdropFilter: 'blur(10px)' }}
      bg={bg}
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
          Marko Djordjevic
        </Heading>
        <Spacer />
        <Navigation />
      </Container>
    </Box>
  );
}

export { Header };
