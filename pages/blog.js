import { Container, Heading, Stack } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { Header } from '@/components/header';

function Home() {
  return (
    <Layout>
      <Header />
      <Container maxW="2xl">
        <Stack spacing="6">
          <Heading size="2xl">Blog</Heading>
        </Stack>
      </Container>
    </Layout>
  );
}

export default Home;
