import { Avatar, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Chef = ({avatar, chefName, workOverview}) => {
  return (
    <VStack>
      <Flex className="chef-avatar-container">
        <Avatar size={'2xl'} src={avatar} />
      </Flex>
      <Heading fontFamily={'semur'} color='tan' letterSpacing='.07rem' size={'lg'}>{chefName}</Heading>
      <Text noOfLines={'1'}>{workOverview}</Text>
    </VStack>
  );
};

export default Chef;
