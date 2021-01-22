import { Stack, Text, Heading } from '@chakra-ui/react';
import capitalizeTitle from 'title';

import { Layout } from '@/components/layout';

export default function BlogLayout({ children, frontMatter }) {
  console.log('frontMatter', frontMatter);
  const { title, date } = frontMatter;

  const capitalizedTitle = capitalizeTitle(title);

  return (
    <Layout>
      <Stack spacing={12}>
        <Heading size="2xl">{capitalizedTitle}</Heading>
        {children}
      </Stack>
    </Layout>
  );
}
