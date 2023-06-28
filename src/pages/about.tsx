import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function About() {
    return (
        <Flex direction='column'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='#F4F7F9'>
                <Flex align='center' direction='row' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]}>
                    <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='28px' fontWeight={600}>
                        About
                    </Text>
                </Flex>
            </Flex>
            {/* <Text color='#01122C'>modern scheduling tool to help you find the best communal time to meet. It was built by two computer science students at the University of Michigan. Thank you for using MeetingBrew!</Text> */}
        </Flex>
    );
}
