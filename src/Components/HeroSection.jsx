import React from 'react';
import { Box, Button, Text, Image } from '@chakra-ui/react';
import './heroSection.css';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <Box id="home" className="hero-section" overflow="hidden">
      <Box className="image-container">
        <span className="image-overlay"></span>
        <Image src='https://source.unsplash.com/random/?restaurant' alt="heroSection Image" />
      </Box>
      <Box className="slogan-and-explore">
        <Text fontSize={['2rem', '3rem']} className="slogan-itself">
          Just like mom used to make
        </Text>
        <Link to="cuisine" spy={true} smooth={true}>
          <Button
            className="explore-btn"
            colorScheme={'red'}
            borderRadius={'full'}
          >
            Explore
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
