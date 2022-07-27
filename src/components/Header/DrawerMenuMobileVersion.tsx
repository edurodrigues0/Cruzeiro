import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Link, Stack, useDisclosure } from "@chakra-ui/react";

import { Avatar } from "./Avatar";
import { LinksGroup } from "../../utils/Links";
import { List } from "phosphor-react";
import { MenuLinks } from "./MenuLinks";

export function DrawerMenuMobileVersion() {
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
      <Drawer onClose={onClose} isOpen={isOpen} placement='right'>
        <DrawerOverlay />
          <DrawerContent bg='bluePrimary' color='white'>
            <DrawerCloseButton
              color='white'
              _focus={{ring: '1.5px', ringColor: 'white'}}
            />
            <DrawerHeader>
              <Avatar />
            </DrawerHeader>
            
            <Divider
              h='2rem'
              w='80%'
              m='0 auto'
            />
            
            <DrawerBody 
              display='flex' 
              alignSelf='center' 
              flexDirection="column"
              mt='4rem'
              fontSize='1.5rem'
              mr='20%'
            >
              <Stack
                spacing={['0.85rem','1.5rem']}
                direction='column'
                color='white'
              >
              {
                LinksGroup.map((links) => {
                  return(
                    <MenuLinks title={links.link} id={links.id}/>
                  )
                })
              }
            </Stack>
              <Flex flexDirection='column' fontSize='0.825rem' mt='2rem'>
              <Link
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  Sobre o clube
                </Link>

                <Link
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  Comunidade
                </Link>

                <Link
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  Fans
                </Link>
                
                <Link
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  FAQs
                </Link>
                
                <Link
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  Contate-nos
                </Link>

                <Link 
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
                >
                  Trabalhe conosco
                </Link>
                
                <Link 
                  href='#'
                  _focus={{ ring: '1px', ringColor: 'white'}}
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