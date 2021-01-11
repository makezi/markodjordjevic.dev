import { Heading, Stack } from '@chakra-ui/react';

import { Layout } from '@/components/layout';

function Home() {
  return (
    <Layout>
      <Stack spacing="6">
        <Heading size="3xl">📝 Blog</Heading>
      </Stack>
    </Layout>
  );
}

export default Home;
