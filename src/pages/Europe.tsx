import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react'

import EuropeBanner from '../assets/europeBanner.png'
import InfoIcon from '../assets/Info.svg'
import { CityCard } from '../components/CityCard'

export function Europe() {
  return (
    <>
      <Box
        backgroundImage={EuropeBanner}
        height={{ base: '150px', md: '500px' }}
        backgroundSize="cover"
      >
        <Center
          maxWidth="1240px"
          margin="0 auto"
          position="relative"
          height="100%"
        >
          <Text
            fontWeight="600"
            color="#F5F8FA"
            fontSize={{ base: '28px', md: '48px' }}
            lineHeight={{ base: '42px', md: '72px' }}
            position={{ base: 'unset', md: 'absolute' }}
            bottom="59px"
            left="40px"
          >
            Europa
          </Text>
        </Center>
      </Box>

      <Box
        maxWidth="1240px"
        margin={{ base: '24px auto 32px', md: '80px auto 35px' }}
        paddingX={{ base: '16px', md: '40px' }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '16px', md: '70px' }}
        >
          <Text
            maxWidth={{ base: 'unset', lg: '600px' }}
            textAlign="justify"
            fontWeight="400"
            fontSize={{ base: '14px', md: '24px' }}
            lineHeight={{ base: '21px', md: '36px' }}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Flex
              flexDirection="row"
              gap="5px"
              alignItems="flex-end"
              width="100%"
            >
              <Stack
                spacing="42px"
                direction="row"
                width="100%"
                justifyContent="space-between"
              >
                {[
                  {
                    value: '50',
                    text: 'países',
                  },
                  {
                    value: '60',
                    text: 'linguas',
                  },
                  {
                    value: '27',
                    text: 'cidades +100',
                  },
                ].map((info) => {
                  return (
                    <Flex
                      key={info.text}
                      direction="column"
                      alignItems={{ base: 'flex-start', md: 'center' }}
                      justifyContent="center"
                      fontWeight="600"
                    >
                      <Text
                        fontSize={{ base: '24px', md: '48px' }}
                        lineHeight={{ base: '36px', md: '72px' }}
                        color="#FFBA08"
                      >
                        {info.value}
                      </Text>
                      <Text
                        fontSize={{ base: '18px', md: '24px' }}
                        lineHeight={{ base: '27px', md: '18px' }}
                        color="#47585B"
                        whiteSpace="nowrap"
                        fontWeight={{ base: '400', md: '600' }}
                      >
                        {info.text}
                      </Text>
                    </Flex>
                  )
                })}
              </Stack>
              <Box paddingBottom={{ base: '6px', md: '10px' }}>
                <Tooltip
                  label="São mais de 100 cidades"
                  hasArrow
                  backgroundColor="#FFF"
                >
                  <Image
                    src={InfoIcon}
                    alt="info"
                    height="16px"
                    width="16px"
                    maxWidth="unset"
                  />
                </Tooltip>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Box marginTop={{ base: '32px', md: '80px' }}>
          <Text
            fontWeight="500"
            fontSize={{ base: '24px', md: '36px' }}
            lineHeight={{ base: '36px', md: '54px' }}
            marginBottom={{ base: '20px', md: '40px' }}
          >
            Cidades +100
          </Text>
          <SimpleGrid
            spacing="45px"
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            justifyItems="center"
          >
            <CityCard city="Londres" />
            <CityCard city="Paris" />
            <CityCard city="Roma" />
            <CityCard city="Praga" />
            <CityCard city="Amsterda" />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}
