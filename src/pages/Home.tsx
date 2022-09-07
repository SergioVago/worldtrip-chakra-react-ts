import {
  Box,
  Text,
  Stack,
  Image,
  Flex,
  Hide,
  Center,
  Divider,
} from '@chakra-ui/react'

import Background from '../assets/Background.png'
import Airplane from '../assets/Airplane.svg'
import { IconWithText } from '../components/IconWithText'

import 'swiper/css'
import { ContinentsSlider } from '../components/ContinentsSlider'

export function Home() {
  return (
    <>
      <Box height={{ md: '370px', base: '163px' }}>
        <Box
          backgroundImage={Background}
          backgroundSize="cover"
          height={{ md: '335px', base: '163px' }}
        >
          <Flex
            justifyContent="space-between"
            maxWidth="1240px"
            width="100%"
            padding={{ base: '28px 16px', md: '80px 40px 0' }}
            margin="0 auto"
          >
            <Stack spacing={{ base: '8px', md: '20px' }} maxWidth="524px">
              <Box
                color="#F5F8FA"
                fontSize={{ base: '20px', md: '36px' }}
                lineHeight={{ base: '30px', md: '54px' }}
                fontWeight="500"
              >
                <Text>5 continentes,</Text>
                <Text>infinitas possibilidades</Text>
              </Box>
              <Text
                color="#DADADA"
                fontSize={{ base: '14px', md: '20px' }}
                lineHeight={{ base: '21px', md: '30px' }}
                fontWeight="400"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>

            <Hide below="md">
              <Image src={Airplane} alt="Airplane" />
            </Hide>
          </Flex>
        </Box>
      </Box>

      <Center>
        <Box maxWidth="1240px" width="100%" margin="0 auto">
          <Box>
            <Flex
              paddingX={{ base: '40px' }}
              marginY={{ base: '36px', md: '80px' }}
              alignItems="center"
              justifyContent={{ base: 'space-around', lg: 'space-between' }}
              flexWrap="wrap"
              gap="27px"
            >
              <IconWithText iconName="Cocktail">vida noturna</IconWithText>
              <IconWithText iconName="Surf">praia</IconWithText>
              <IconWithText iconName="Building">moderno</IconWithText>
              <IconWithText iconName="Museum">clássico</IconWithText>
              <IconWithText iconName="Earth">e mais...</IconWithText>
            </Flex>

            <Center>
              <Divider
                orientation="horizontal"
                width="90px"
                height={{ base: '1px', md: '2px' }}
                backgroundColor="#47585B"
              />
            </Center>

            <Center
              fontWeight="500"
              fontSize={{ base: '20px', md: '36px' }}
              lineHeight={{ base: '30px', md: '54px' }}
              color="#47585B"
              flexDirection="column"
              margin={{ base: '24px 39px 20px', md: '52px 0' }}
              textAlign="center"
              whiteSpace="nowrap"
            >
              <Text>Vamos nessa?</Text>
              <Text>Então escolha seu continente?</Text>
            </Center>
          </Box>

          <Box
            height={{ base: '250px', md: '450px' }}
            marginBottom="20px"
            cursor="pointer"
          >
            <ContinentsSlider />
          </Box>
        </Box>
      </Center>
    </>
  )
}
