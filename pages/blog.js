import { Stack } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { Title } from '@/components/mdx-components';
import { BlogPost } from '@/components/blog-post';

// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './blog/**/*.mdx';

function Home() {
  return (
    <Layout>
      <Title pb={12}>Blog</Title>
      <Stack spacing={8}>
        {blogPosts.map((blogPost) => (
          <BlogPost key={blogPost.title} {...blogPost} />
        ))}
      </Stack>
    </Layout>
  );
}

export default Home;
