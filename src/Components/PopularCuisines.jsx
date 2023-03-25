import React from 'react';
import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import Cuisine from './Cuisine';
import './popularCuisine.css';
import lightFeather from '../assets/bg-images/feather-lighter.png';
import feather1 from '../assets/bg-images/feather-1.png';

import tteokbokki from '../assets/cuisine-images/tteokbokki.jpg';
import affogato from '../assets/cuisine-images/affogato.jpg';
import kimchi from '../assets/cuisine-images/kimchi.jpg';
import pizza from '../assets/cuisine-images/pizza.jpg';

const PopularCuisines = () => {
  const cuisines = [
    {
      id: 1,
      cuisinePoster: tteokbokki,
      cuisine: 'Tteokbokki (Rice Cake)',
      cuisinePrice: '750',
    },
    {
      id: 2,
      cuisinePoster: affogato,
      cuisine: 'Choco-Icy Affogatto',
      cuisinePrice: '199',
    },
    {
      id: 3,
      cuisinePoster: kimchi,
      cuisine: 'Extra Spicy Veg Kimchi',
      cuisinePrice: '750',
    },
    {
      id: 4,
      cuisinePoster: pizza,
      cuisine: 'Tomato Cheese Pizza',
      cuisinePrice: '249',
    },
  ];
  return (
    <Box id='cuisine' w={['100%', '70%']} m={'2rem auto'} className="feather-bg-parent" overflow={['hidden', 'inherit']}>
      <Box className="feather-bg">
        <Image className="light-feather" src={lightFeather} alt="feather" />
        <Image className="dark-feather" src={feather1} alt="feather" />
      </Box>
      <Heading letterSpacing={'0.07rem'} textAlign={'center'} my="4rem" color="tan" fontFamily={'semur'}>
        Popular Cuisines
      </Heading>
      <Flex
        flexWrap="wrap"
        gap="1.3rem"
        justifyContent={['center', 'space-between']}
      >
        {cuisines.map(item => (
          <Cuisine
            key={item.id}
            poster={item.cuisinePoster}
            title={item.cuisine}
            price={item.cuisinePrice}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PopularCuisines;
