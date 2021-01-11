import { Heading, Stack, Text } from '@chakra-ui/react';

import { Layout } from '@/components/layout';

function Home() {
  return (
    <Layout>
      <Stack spacing="6">
        <Heading size="3xl">📝 Blog</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis
          sapien purus. Vestibulum ullamcorper, orci eget mattis dapibus, mi
          neque placerat tellus, et posuere justo mauris quis dui. Aenean quam
          eros, ullamcorper porttitor enim eget, rhoncus tempus augue. Nam ac
          volutpat orci, dapibus varius mauris. Aliquam erat volutpat. Nunc nec
          sapien vestibulum velit aliquet tincidunt. Nulla ultrices ultricies
          pretium. Quisque sagittis, velit sit amet consectetur varius, arcu
          arcu pulvinar nisi, non dapibus erat nisi vel libero. Curabitur
          ullamcorper dui sit amet nunc facilisis sagittis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse vehicula auctor
          dapibus. Integer malesuada fringilla odio vitae lobortis. Suspendisse
          venenatis porttitor odio, eget finibus turpis elementum quis. Morbi
          sapien sem, iaculis ut est vitae, fringilla commodo purus.
          Pellentesque pellentesque luctus nibh id ultrices. Vestibulum sodales
          augue eget convallis ullamcorper.
        </Text>
        <Text>
          Nullam volutpat fermentum leo, placerat mollis tellus. Integer
          consectetur mi eu massa viverra condimentum. Maecenas eu pulvinar
          nisi. Sed vel elit commodo, ullamcorper nunc id, vehicula magna. Sed
          id sapien diam. Maecenas elementum lorem ut tristique mollis. Maecenas
          convallis convallis metus in aliquet.
        </Text>
        <Text>
          Proin iaculis lacus vel posuere tristique. Phasellus rutrum feugiat
          risus eget dictum. Morbi condimentum quis erat ut condimentum. Quisque
          pretium vel dolor non blandit. Sed in aliquam ipsum. Curabitur tempus
          metus non felis placerat tincidunt. Etiam pellentesque sapien at lorem
          varius eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc sapien nunc, sagittis eget sem et, luctus maximus felis.
          Proin quis eleifend sapien. Nam arcu ante, convallis sit amet cursus
          sed, porttitor et dolor. Morbi auctor feugiat laoreet. Ut orci ante,
          pulvinar in volutpat quis, finibus ut lectus. Aliquam porta ex nisl,
          vitae efficitur quam ultricies vulputate. Nulla vitae pulvinar tortor.
        </Text>
        <Text>
          Phasellus elementum lacinia orci nec ultrices. Phasellus eleifend ac
          justo id suscipit. Cras facilisis eleifend mi, eu iaculis diam tempor
          non. Fusce ultricies enim nisi, ut hendrerit nisi ullamcorper non.
          Nullam quis nisl non dui commodo mollis ut sed libero. Sed eros
          mauris, sagittis nec feugiat tristique, interdum in nulla. Vivamus
          dapibus odio quam, sed pretium neque porta eget.
        </Text>
      </Stack>
    </Layout>
  );
}

export default Home;
