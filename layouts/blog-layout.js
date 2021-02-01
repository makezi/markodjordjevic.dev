import { Stack, Box, Text, Flex, Spacer, Tag } from '@chakra-ui/react';
import capitalizeTitle from 'title';
import { format, parseISO } from 'date-fns';

import { Title } from '@/components/mdx-components';
import { Layout } from '@/components/layout';

function Keywords({ keywords }) {
  return (
    <Stack direction="row">
      {keywords.map((keyword) => (
        <Tag key={keyword}>{keyword}</Tag>
      ))}
    </Stack>
  );
}

function BlogInfo({ author, date, keywords, readingTime }) {
  const formattedDate = format(parseISO(date), 'MMM dd, yyyy');

  return (
    <Flex color="gray.500" fontWeight="medium">
      <Stack>
        <Text>
          {author}, {formattedDate}
        </Text>
        <Keywords keywords={keywords} />
      </Stack>
      <Spacer />
      <Text>{readingTime.text}</Text>
    </Flex>
  );
}

export default function BlogLayout({ children, frontMatter }) {
  console.log('frontMatter', frontMatter);
  const { title } = frontMatter;
  const capitalizedTitle = capitalizeTitle(title);

  return (
    <Layout>
      <Box pb={12}>
        <Stack>
          <Title>{capitalizedTitle}</Title>
          <BlogInfo {...frontMatter} />
        </Stack>
      </Box>
      {children}
    </Layout>
  );
}
