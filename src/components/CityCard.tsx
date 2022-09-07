import { Box, Flex, Image, Text } from '@chakra-ui/react'

import LondresBanner from '../assets/LondresBanner.png'
import LondresFlag from '../assets/LondresFlag.png'
import ParisBanner from '../assets/ParisBanner.png'
import ParisFlag from '../assets/ParisFlag.png'
import RomaBanner from '../assets/RomaBanner.png'
import RomaFlag from '../assets/RomaFlag.png'
import PragaBanner from '../assets/PragaBanner.png'
import PragaFlag from '../assets/PragaFlag.png'
import AmsterdaBanner from '../assets/AmsterdaBanner.png'
import AmsterdaFlag from '../assets/AmsterdaFlag.png'

const cities = {
  Londres: {
    banner: LondresBanner,
    flag: LondresFlag,
    cityName: 'Londres',
    countryName: 'Reino Unido',
  },
  Paris: {
    banner: ParisBanner,
    flag: ParisFlag,
    cityName: 'Paris',
    countryName: 'França',
  },
  Roma: {
    banner: RomaBanner,
    flag: RomaFlag,
    cityName: 'Roma',
    countryName: 'Itália',
  },
  Praga: {
    banner: PragaBanner,
    flag: PragaFlag,
    cityName: 'Praga',
    countryName: 'República Tcheca',
  },
  Amsterda: {
    banner: AmsterdaBanner,
    flag: AmsterdaFlag,
    cityName: 'Amsterdã',
    countryName: 'Holanda',
  },
}

interface CityCardProps {
  city: keyof typeof cities
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Box
      borderColor="brand.500"
      borderWidth="1px"
      borderRadius="4px"
      width="256px"
    >
      <Image
        src={cities[city].banner}
        alt=""
        width="256px"
        // height={{ base: '140px', lg: '173px' }}
        maxWidth="unset"
        marginLeft="-1px"
        marginTop="-1px"
        borderLeftRadius="4px"
        borderTopRadius="4px"
      />
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="18px"
        paddingX="24px"
        paddingBottom="25px"
      >
        <Box>
          <Text
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
            color="#47585B"
            marginBottom="12px"
          >
            {cities[city].cityName}
          </Text>
          <Text
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
            color="#999999"
          >
            {cities[city].countryName}
          </Text>
        </Box>
        <Image src={cities[city].flag} alt="" boxSize="30px" />
      </Flex>
    </Box>
  )
}
