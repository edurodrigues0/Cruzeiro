import { Box, Divider, Flex, Image, Link, Stack, useBreakpointValue } from "@chakra-ui/react";

import { Avatar } from "./Avatar";
import { DrawerMenu } from "./DrawerMenu";
import { DrawerMenuMobileVersion } from "./DrawerMenuMobileVersion";
import { LinksGroup } from "../../utils/Links";
import { MenuLinks } from "./MenuLinks";
import { SponsorsAndPatners } from "./SponsorsAndPatners";

export function Header() {
  const authenticated = true;
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  function MenuMobileVersion() {
    return(
      <DrawerMenuMobileVersion />
    );
  }

  return(
    <Box
      as='header'
      w='100%'
      bg='bluePrimary'
      display='flex'
      flexDir='column'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        w='80%'
        m='1rem auto'
      >

        <Link
          href='/'
          p='4px'
          _focus={{ ring: '2px', ringColor: 'white', borderRadius: 'full' }}
        >
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Logo_Cruzeiro_1996.png'
            alt='Escudo do cruzeiro'
            boxSize={['3.5rem','4rem','5rem']}
          />
        </Link>
        
        { isWideVersion && <SponsorsAndPatners />}

        {
          isWideVersion ? 
            <Box>
              {
                authenticated ? 
                  <Avatar />
                  : 
                  <>
                    <Link
                      href='#'
                      mx='1rem'
                      color='white'
                      _hover={{textDecoration: 'none', color:'blue.100'}}
                      _focus={{ ring: '1px', ringColor: 'white'}}
                    >
                      ENTRAR
                    </Link>
                
                    <Link
                      href='#'
                      color='white'
                      _hover={{textDecoration: 'none', color:'blue.100'}}
                      _focus={{ ring: "1px", ringColor: 'white'}}
                    >
                      REGISTRAR
                    </Link>
                  </>
              }
            </Box>
            :
            MenuMobileVersion()
        }
      
      </Box>
      
      <Divider 
        w='80%'
        m='0 auto'
      />
      
      <Flex
        w='80%'
        m='2rem auto'
        justifyContent='space-between'
        alignItems='center'
      >
        { 
          isWideVersion ?
          <>
            <Stack direction='row' color='white'>
              {
                LinksGroup.map((links) => {
                  return(
                    <MenuLinks title={links.link} id={links.id}/>
                  )
                })
              }
            </Stack>
            <DrawerMenu />
          </> 
          :
          <SponsorsAndPatners />
        }
      </Flex>
    </Box>
  )
}