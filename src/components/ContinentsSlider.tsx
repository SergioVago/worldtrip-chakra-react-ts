import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ContainerSlider.css'

import Europe from '../assets/Europe.png'
import SouthAmerica from '../assets/SouthAmerica.jpg'
import NorthAmerica from '../assets/NorthAmerica.jpg'
import Africa from '../assets/Africa.jpg'
import Oceania from '../assets/Oceania.jpg'
import Asia from '../assets/Asia.jpg'
import { Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function ContinentsSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="slider"
    >
      {[
        {
          image: Europe,
          continentName: 'Europa',
          subText: 'O continente mais antigo.',
        },
        {
          image: SouthAmerica,
          continentName: 'América do Sul',
          subText: 'O paraíso.',
        },
        {
          image: NorthAmerica,
          continentName: 'América do Norte',
          subText: 'É bonita, mas a do sul é melhor.',
        },
        {
          image: Africa,
          continentName: 'África',
          subText: 'O deserto faz parte.',
        },
        {
          image: Oceania,
          continentName: 'Oceania',
          subText: 'Você já ouviu falar.',
        },
        {
          image: Asia,
          continentName: 'Ásia',
          subText: 'Onde tudo começou.',
        },
      ].map((continent) => {
        return (
          <SwiperSlide key={continent.continentName}>
            <Link to="/Europe">
              <Center
                backgroundImage={continent.image}
                height="100%"
                width="100%"
                backgroundSize="cover"
                backgroundPosition="bottom"
              >
                <Center flexDirection="column" fontWeight="700">
                  <Text
                    fontSize={{ base: '24px', md: '48px' }}
                    lineHeight={{ base: '36px', md: '72px' }}
                    color="#F5F8FA"
                  >
                    {continent.continentName}
                  </Text>
                  <Text
                    fontSize={{ base: '14px', md: '24px' }}
                    lineHeight={{ base: '21px', md: '36px' }}
                    color="#DADADA"
                  >
                    {continent.subText}
                  </Text>
                </Center>
              </Center>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
