import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0' >
                <Flex align='center' direction='row' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='34px' fontWeight={600}>
                    Create an Event
                    </Text>
                    {/* <Flex align='center' h='26px' mt='61px' px={2} border='1.5px dashed #00132C' borderRadius={4}>
                    <Text color='#00132C'>+</Text>
                </Flex> */}
                </Flex>
            </Flex>
            <Flex justify='center' direction='row' w='100%' h='400px' px={[0, 1, 2, 4]} bg='white' >
                <Flex direction='column' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]} py={4} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text ml={2} color='#00132C' fontSize='24px' fontWeight={600}>Enter a Title</Text>
                    <Input maxW='240px' h='38px' mt={2} ml={2} color='gray.700' fontSize='16px' fontWeight={500} bg='#F7F7F7' border='1.5px solid lightgray' borderRadius={4} _hover={{border: '1.5px solid #7A84E8'}} _focus={{boxShadow: 'none', outline: 'none', border: '1.5px solid #7A84E8'}} _placeholder={{color: 'gray'}} placeholder='Ex: Coding Session' spellCheck='false' />
                    {/* <Text mt={4} ml={2} color='#00132C' fontSize='24px' fontWeight={600}>Custom URL (optional)</Text> */}
                    <Flex justify='center' direction='column' w='340px' ml={2}>
                        <Flex align='center' mt={10} >
                            <Text color='#00132C' fontSize='22px'>timeblend.fyi/events/</Text>
                            <Input w='200px' h='32px' ml={1}  px={2} color='gray.700' fontSize='16px' fontWeight={500} bg='#F7F7F7' border='1.5px solid lightgray' borderRadius={4} _hover={{border: '1.5px solid #7A84E8'}} _focus={{boxShadow: 'none', outline: 'none', border: '1.5px solid #7A84E8'}} _placeholder={{color: 'gray'}} placeholder='custom id' spellCheck='false' />
                            
                        </Flex>
                        <Text mt={1} color='#717171' fontSize='11.5pt'>You can optionally set a custom id that will appear in the link of your timeblend.</Text>
                    </Flex>
                    <Flex align='center' justify='center' maxW='190px' h='52px' mt={6} mr={1} ml={2} px={3} bg='#E6E7F9' borderRadius={5} _hover={{transform: 'translateY(-1px)', bg: '#ebecfc', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);'}}>
                        <Text color='#625BF8' fontSize='16pt' fontWeight={600}>Create Event +</Text>
                    </Flex>
                    
                </Flex>
            </Flex>
        </Flex>
    );
}
