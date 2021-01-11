import { Heading, Text, Stack, Flex } from '@chakra-ui/react';
import NextImage from 'next/image';

import { Layout } from '@/components/layout';

function Avatar() {
  return (
    <Flex width={200} height={200} borderRadius="9999px" overflow="hidden">
      <NextImage
        src="/images/me.jpg"
        alt="Marko Djordjevic"
        objectFit="cover"
        width={200}
        height={200}
      />
    </Flex>
  );
}

function Home() {
  return (
    <Layout>
      <Stack spacing="12">
        <Flex justifyContent="center">
          <Avatar />
        </Flex>
        {/* <Flex justifyContent="center">
          <Avatar
            src="/images/me.jpg"
            alt="Marko Djordjevic"
            objectFit="cover"
            width={200}
            height={200}
          />
        </Flex> */}
        <Stack spacing="6">
          <Heading size="xl">Hey, I'm Marko Djordjevic 👋</Heading>
          <Text color="red.500">🔥 Section Needs Updating</Text>
          <Text>
            I'm a front-end web developer living in Sydney, Australia. I have a
            fondness of turning interesting and challenging concepts into
            perfection amazing products. I've worked with the likes of Macquarie
            University, Matrium and Pittwater Council to deliver cutting-edge
            web and mobile experiences.
          </Text>
          <Text>
            Growing up, I played a lot of video games which led me down a path
            of darkness ambition to dabble in the realm of game development. It
            was after these game developing days that I realised web
            applications were more my style.
          </Text>
          <Text>
            Now I work as a front-end web developer, currently using React. You
            can still find me playing games such as Dota 2 and Beat Saber when
            I'm not working on cool projects. I also enjoy eating ramen, boxing,
            watching tennis, escape rooms, eating more ramen and browsing
            reddit.
          </Text>
          <Text>
            Want to develop this further? Or simply interested in just hanging
            out for some coffee? Then let's talk.
          </Text>
        </Stack>
      </Stack>
    </Layout>
  );
}

export default Home;
