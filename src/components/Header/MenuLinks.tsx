import { Box, Button, Grid, Link, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { CaretDown, X } from 'phosphor-react';

import { SubLinks } from '../../utils/Links';
import { useState } from "react";

interface LinksProps {
  id?: number;
  title: string;
}

export function MenuLinks({title, id}: LinksProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  const fontSizeValues = useBreakpointValue({
    xl: '1rem',
    lg: '0.7rem',
  })
  
  return(
    <Menu isLazy>
      {({isOpen}) => (
        <>
          <MenuButton
            as={Button}
            padding='0px 3px'
            variant="link"
            borderRadius='none'
            alignSelf='start'
            fontSize={fontSizeValues}
            color='blue.50'
            rightIcon={isWideVersion && (isOpen ? <X size="0.825rem"/> : <CaretDown size="0.825rem" />)}
            _hover={{ color: 'blue.100' }}
            _active={{ color: 'blue.100' }}
            _focus={{ ring: '1px', ringColor: 'white'}}
          >
            {title}
          </MenuButton>
          
          <MenuList
            bg='blue.500'
            h='20rem'
            w={['5rem', '5rem', '100vw']}
            fontSize='1rem'
            border='none'
            borderRadius='0'
            padding='1rem'
          >
            <Grid
              gap={1}
            >
              {SubLinks.map(link => {
                if(id === link.refId) {
                  return(
                    <Link>{link.link}</Link>
                  )
                }
              })}
            </Grid>
          </MenuList>
        </>
      )}
    </Menu>
  );
}