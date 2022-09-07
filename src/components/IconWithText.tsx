import { ReactNode } from 'react'

import Cocktail from '../assets/cocktail 1.svg'
import Surf from '../assets/surf 1.svg'
import Building from '../assets/building 1.svg'
import Museum from '../assets/museum 1.svg'
import Earth from '../assets/earth 1.svg'
import Ellipse from '../assets/ellipse.svg'

import { Center, Hide, Image, Show, Text } from '@chakra-ui/react'

const icons = {
  Cocktail,
  Surf,
  Building,
  Museum,
  Earth,
}

interface IconWithTextProps {
  iconName: keyof typeof icons
  children: ReactNode
}

export function IconWithText({ children, iconName }: IconWithTextProps) {
  return (
    <Center
      flexDirection={{ base: 'row', lg: 'column' }}
      // flex="1"
      gap={{ base: '8px', lg: '24px' }}
      justifyContent="flex-start"
    >
      <Hide below="lg">
        <Image
          src={icons[iconName]}
          alt=""
          boxSize="85px"
          // marginBottom="24px"
        />
      </Hide>
      <Show below="lg">
        <Image src={Ellipse} alt="" boxSize="8px" />
      </Show>
      <Text
        fontWeight="600"
        fontSize={{ base: '18px', md: '24px' }}
        color="#47585B"
        lineHeight={{ base: '27px', md: '36px' }}
        whiteSpace="nowrap"
      >
        {children}
      </Text>
    </Center>
  )
}
