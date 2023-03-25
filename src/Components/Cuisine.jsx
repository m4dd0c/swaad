import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './cuisine.css';
import {FaRupeeSign} from 'react-icons/fa'


const Cuisine = ({poster, price, title}) => {
  return (
    <VStack className="cuisine-card-parent">
      <Image className="cuisine-card-poster" src={poster} alt="Caffe Latte" />
      <Box className="cuisine-card-footer">
        <Heading color="beige" noOfLines={1} size="md">
          {title}
        </Heading>
        <HStack pt='.5rem'>
          <FaRupeeSign size={'1.2rem'} color='beige'/>
          <Text color="beige"><strong>{price}</strong></Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Cuisine;
