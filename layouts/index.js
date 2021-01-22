import { Stack, Text, Heading } from '@chakra-ui/react';

import { Layout } from '@/components/layout';

export default function BlogLayout({ children, frontMatter }) {
  console.log('frontMatter', frontMatter);
  const { title, date } = frontMatter;

  return (
    <Layout>
      <Stack spacing={6}>
        <Heading size="3xl">{title}</Heading>
        {children}
      </Stack>
    </Layout>
  );
}
