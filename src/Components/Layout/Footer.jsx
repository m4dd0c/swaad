import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import './footer.css';

const Footer = () => {
  return (
    <Flex
      direction={['column', 'row']}
      bg={'gray.700'}
      className="footer-parent"
    >
      <HStack w={['100%', '50%']}>
      <Box>
          <Heading size={'md'}>Routes</Heading>
          <ul>
            <li className='footer-route'>
              <Link smooth={true} spy={true} to="home">Home</Link>
            </li>
            <li className='footer-route'>
              <Link smooth={true} spy={true}  to="about">About</Link>
            </li>
            <li className='footer-route'>
              <Link smooth={true} spy={true}  to="cuisine">Cuisine</Link>
            </li>
            <li className='footer-route'>
              <Link smooth={true} spy={true}  to="contact">Contact</Link>
            </li>
          </ul>
        </Box>
        <Spacer />
        <Box>
          <Heading size={'md'}>Social Handles</Heading>
          <HStack m={'1rem 0'}>
            <li>
              <a href="https://instagram.com/m4dd0x_">
                <HStack>
                  <FaInstagram size={'1rem'} />
                </HStack>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/m4dd0c">
                <FaFacebook size={'1.5rem'} />
              </a>
            </li>
            <li>
              <a href="https://github.com/m4dd0c">
                <HStack>
                  <FaGithub size={'2rem'} />
                </HStack>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/m4dd0c">
                <FaLinkedin size={'1.5rem'} />
              </a>
            </li>
            <li>
              <a href="mailto:m4dd0x078@gmail.com">
                <FaEnvelope size={'1rem'} />
              </a>
            </li>
          </HStack>
        </Box>        
      </HStack>
      <Spacer />
      <HStack>
        <VStack>
          <Avatar src="./logo.png" size={'xl'} className="avatar-itself" />
          <Text className="footer-logo-name">Swaad</Text>
          <Text size={'sm'} className="footer-slogan">
            just like mom used to make
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Footer;
