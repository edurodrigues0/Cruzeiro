import { Button, Avatar as ChakraAvatar } from '@chakra-ui/react';

import { User } from 'phosphor-react';

export function Avatar() {
  return(
    <>
      <Button
        w='3.5rem'
        h='3.5rem'
        borderRadius='full'
        variant='ghost'
        _hover={{ backgroundColor: 'none'}}
        _focus={{ ring: '1px', ringColor: 'white'}}
      >
        <ChakraAvatar 
          bg='white'
          icon={<User size='1.5rem' color='#005BA2' />}
        />
      </Button>
    </>
  );
}