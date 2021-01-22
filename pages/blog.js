import { Heading, Stack } from '@chakra-ui/react';

import { BlogPost } from '@/components/blog-post';
import { Layout } from '@/components/layout';

// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './blog/**/*.mdx';

function Home() {
  return (
    <Layout>
      <Stack spacing="14">
        <Heading size="2xl">Blog</Heading>
        {blogPosts.map((blogPost) => (
          <BlogPost key={blogPost.title} {...blogPost} />
        ))}
      </Stack>
    </Layout>
  );
}

export default Home;
