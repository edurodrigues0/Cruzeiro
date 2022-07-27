import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Link, useDisclosure } from "@chakra-ui/react";

import { List } from 'phosphor-react';

export function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return(
    <>
      <IconButton
        icon={<List size='2rem' color='white'/>}
        borderRadius="none"
        variant='link'
        aria-label="More"
        _focus={{ ring: '1px', ringColor: 'white'}}
        onClick={() => onOpen()}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
          <DrawerContent bg='bluePrimary' color='white'>
            <DrawerCloseButton
              color='white'
              _focus={{ring: '1.5px', ringColor: 'white'}}
            />
            <DrawerBody 
              display='flex' 
              alignSelf='center' 
              flexDirection="column"
              justifyContent='center'
              fontSize='1.5rem'
              mr='20%'
            >
              <Link
                href='#'
                _focus={{ring: 'none', textDecoration: 'underline'}}
              >
                Sobre o clube
              </Link>
              
              <Link
                href='#'
                _focus={{ring: 'none', textDecoration: 'underline'}}
              >
                Comunidade
              </Link> 

              <Link
                href='#'    
                _focus={{ring: 'none', textDecoration: 'underline'}}
              >
                Fans
              </Link>
              <Flex flexDirection='column' fontSize='0.825rem' mt='2rem'>
                <Link
                  href='#'
                  _focus={{ring: 'none', textDecoration: 'underline'}}
                >
                  FAQs
                </Link>
                
                <Link
                  href='#'
                  _focus={{ring: 'none', textDecoration: 'underline'}}
                >
                  Contate-nos
                </Link>

                <Link 
                  href='#'
                  _focus={{ring: 'none', textDecoration: 'underline'}}
                >
                  Trabalhe conosco
                </Link>
                
                <Link 
                  href='#'
                  _focus={{ring: 'none', textDecoration: 'underline'}}
                >
                  Cruzeiro App
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
      </Drawer>
    </>
  );
}