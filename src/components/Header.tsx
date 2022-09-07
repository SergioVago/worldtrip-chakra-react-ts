import { Box, Button, Center, Image } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import worldTripLogo from '../assets/wordTripLogo.svg'
import chevronLeft from '../assets/chevronLeft.svg'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box>
      <Center
        maxWidth="1160px"
        paddingY={{ base: '15px', md: '27px' }}
        margin="0 auto"
        position="relative"
      >
        {location.pathname !== '/' && (
          <Button
            backgroundColor="transparent"
            onClick={() => {
              navigate(-1)
            }}
            position="absolute"
            left="0"
            minWidth="0"
            width="32px"
            height="32px"
            padding="0"
          >
            <Image src={chevronLeft} alt="" height="16px" width="8px" />
          </Button>
        )}

        <Image
          src={worldTripLogo}
          alt=""
          height={{ base: '20px', md: '46px' }}
        />
      </Center>
    </Box>
  )
}
