import React from 'react';
import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import Chef from './Chef.jsx';
import lightFeather from '../assets/bg-images/feather-lighter.png';
import feather1 from '../assets/bg-images/feather-1.png';

import daniParker from '../assets/team-images/dani-parker.jpg';
import songJongKi from '../assets/team-images/song-jong-ki.jpg';
import michelleSmith from '../assets/team-images/michelle-smith.jpg';
import maneetChouhan from '../assets/team-images/maneet-chauhan.jpg';

const OurTeam = () => {
  const chefs = [
    {
      id: 1,
      avatar: daniParker,
      name: 'Dani Parker',
      workOverview: 'Sea food is my department',
    },
    {
      id: 2,
      avatar: songJongKi,
      name: 'Song Jong ki',
      workOverview: 'East asian food specialist.',
    },
    {
      id: 3,
      avatar: michelleSmith,
      name: 'Michelle Smith',
      workOverview: 'Fast food specialist.',
    },
    {
      id: 4,
      avatar: maneetChouhan,
      name: 'Maneet Chouhan',
      workOverview: 'General cook at SWAAD',
    },
  ];
  return (
    <Box id='about' w={['100%', '70%']} m={'2rem auto'} className="feather-bg-parent" overflow={['hidden', 'inherit']}>
      <Box className="feather-bg">
        <Image className="dark-feather" src={lightFeather} alt="feather" />
        <Image className="light-feather" src={feather1} alt="feather" />
      </Box>
      <Heading letterSpacing='0.07rem' color="tan" textAlign={'center'} my="4rem" fontFamily={'semur'}>
        Our Team
      </Heading>
      <Flex flexWrap="wrap" gap="2rem" justifyContent="center">
        {chefs.map(item => (
          <Chef
            key={item.id}
            chefName={item.name}
            avatar={item.avatar}
            workOverview={item.workOverview}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default OurTeam;
