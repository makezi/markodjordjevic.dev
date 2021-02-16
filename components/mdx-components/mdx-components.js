import {
  Heading,
  Text,
  Code,
  Link,
  OrderedList,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

function Title(props) {
  return <Heading as="h1" size="2xl" {...props} />;
}

function SectionHeading(props) {
  return <Heading as="h2" size="lg" mb={6} mt={14} {...props} />;
}

function SubSectionHeading(props) {
  return <Heading as="h3" size="md" {...props} />;
}

function Paragraph(props) {
  return <Text my={6} {...props} />;
}

function InlineCode(props) {
  return <Code display="inline" p={1} colorScheme="gray" {...props} />;
}

function AnchorLink(props) {
  return <Link color="#F43F5E" fontWeight="medium" {...props} />;
}

function MyOrderedList(props) {
  return <OrderedList spacing={2} my={6} {...props} />;
}

function MyUnorderedList(props) {
  return <UnorderedList spacing={2} my={6} {...props} />;
}

function MyListItem(props) {
  return (
    <ListItem
      pl={2}
      sx={{ '::marker': { color: 'gray.600', fontWeight: 'medium' } }}
      {...props}
    />
  );
}

export { Title, SectionHeading, SubSectionHeading };
export default {
  h1: Title,
  h2: SectionHeading,
  h3: SubSectionHeading,
  p: Paragraph,
  inlineCode: InlineCode,
  a: AnchorLink,
  ol: MyOrderedList,
  ul: MyUnorderedList,
  li: MyListItem
};
