import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex justify='center' direction="row" w='100%' h='140px' px={[0,1,2,4]} bg='#F4F7F9'>  
            <Flex  align='center' direction="row" w={['100%','90%','70%','70%']} minW='200px' maxW='1200px' h='100%' px={[0,1,2,4]}>
                <Text mt='50px' mr={6} ml={2}  color='#625BF8' fontSize='28px' fontWeight={600}>Create an Event</Text>
                {/* <Flex align='center' h='26px' mt='61px' px={2} border='1.5px dashed #00132C' borderRadius={4}>
                    <Text color='#00132C'>+</Text>
                </Flex> */}
            </Flex>
        </Flex>
    );
}
