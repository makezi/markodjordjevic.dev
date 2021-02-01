const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');
const readingTime = require('reading-time');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent)
    })
  }
})();
