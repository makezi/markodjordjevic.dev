import { Link, Stack, Text, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import capitalizeTitle from 'title';

export function BlogPost({ title, summary, __resourcePath, author, date }) {
  const slug = __resourcePath.replace('blog/', '').replace('/index.mdx', '');
  const capitalizedTitle = capitalizeTitle(title);

  return (
    <Stack spacing={2}>
      <NextLink href={`/blog/${slug}`} passHref>
        <Link href={`/blog/${slug}`}>
          <Heading size="md">{capitalizedTitle}</Heading>
        </Link>
      </NextLink>
      <Text>{summary}</Text>
      <NextLink href={`/blog/${slug}`} passHref>
        <Link href={`/blog/${slug}`} textDecoration="underline">
          <Text>Read →</Text>
        </Link>
      </NextLink>
    </Stack>
  );
}
