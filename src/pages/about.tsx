import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function About() {
    return (
        <Flex direction='column'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0'>
                <Flex align='center' direction='row' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='38px' fontWeight={600}>
                        About
                    </Text>
                </Flex>
            </Flex>
            <Flex justify='center' direction='row' w='100%' h='600px' px={[0, 1, 2, 4]} bg='white' >
                <Flex direction='column' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} py={4} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt={2} ml={2} color='#00142C' fontSize='13pt'>Timeblend.fyi is a modern scheduling tool to help groups of people find the best communal time to meet. It was built by two people passionate about computer science. Thank you for using timeblend.fyi!</Text>
                    <Text mt={5} ml={2} color='#00142C' fontSize='12.5pt' fontWeight={600}>Contact us</Text>
                    <Text mt={2} ml={2} color='#00142C'>• &nbsp;&nbsp;&nbsp;<Text as='span' _hover={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location.assign('mailto:noelohaeri@gmail.com')}>noelohaeri@gmail.com</Text></Text>
                    <Text mt={2} ml={2} color='#00142C'>• &nbsp;&nbsp;&nbsp;<Text as='span' _hover={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location.assign('mailto:hibbs.matthew@protonmail.com')}>hibbs.matthew@protonmail.com</Text></Text>
                </Flex>
            </Flex>
            {/* <Text color='#01122C'>modern scheduling tool to help you find the best communal time to meet. It was built by two computer science students at the University of Michigan. Thank you for using MeetingBrew!</Text> */}
        </Flex>
    );
}
