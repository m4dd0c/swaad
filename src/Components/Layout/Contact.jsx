import {
  Flex,
  Button,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  Box,
  Heading,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import './contact.css';
import { FiSend } from 'react-icons/fi';
import lightFeather from '../../assets/bg-images/feather-lighter.png';
import feather1 from '../../assets/bg-images/feather-1.png';


const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInput = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (

    <Box id='contact' w={['100%', '70%']} m={'2rem auto'} className='feather-bg-parent' overflow={['hidden', 'inherit']}>
    <Box className="feather-bg">
      <Image className="light-feather" src={lightFeather} alt='feather'/>
      <Image className="dark-feather" src={feather1} alt='feather'/>
    </Box>
    <Heading letterSpacing={'.07rem'} textAlign={'center'} my="4rem" color="tan" fontFamily={'semur'} >
      Contact us
    </Heading>
      <Flex className="contact-parent" w="100%">
        <Box w={['90%', '35%']}>
          <form method="post">
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="eg: John Doe"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInput}
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="eg: address@service.com"
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
            <FormLabel>Message</FormLabel>
            <Textarea
              rows="5"
              placeholder="Your message in brief..."
              name="message"
              value={userData.message}
              onChange={handleInput}
            />
            <Button mt="1rem" variant={'solid'} colorScheme={'red'}>
              <HStack>
                <FiSend size="1rem" />
                <Text>Send</Text>
              </HStack>
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
