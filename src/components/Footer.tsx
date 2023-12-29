import { HStack, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack justifyContent='center' padding='10px'>
      <Text>
        <Link
          color='teal.500'
          href='https://github.com/elen-oz/game-hub'
          isExternal
        >
          code source
        </Link>{' '}
        &#x2223; made by{' '}
        <Link color='teal.500' href='https://github.com/elen-oz' isExternal>
          elen-oz
        </Link>
      </Text>
    </HStack>
  );
};
export default Footer;
