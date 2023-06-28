import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='#F4F7F9' >
                <Flex align='center' direction='row' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]} borderRight='1px dashed #dcdee0' borderBottom='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='34px' fontWeight={600}>
                    Create an Event
                    </Text>
                    {/* <Flex align='center' h='26px' mt='61px' px={2} border='1.5px dashed #00132C' borderRadius={4}>
                    <Text color='#00132C'>+</Text>
                </Flex> */}
                </Flex>
            </Flex>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='white' >
                <Flex direction='column' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]} py={4} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text ml={2} color='#00132C' fontSize='24px' fontWeight={600}>Enter a Title</Text>
                    <Input maxW='240px' mt={2} color='black' bg='gray.200' />
                </Flex>
            </Flex>
        </Flex>
    );
}
