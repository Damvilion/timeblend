import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdViewTimeline } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Navbar:React.FC = () => {
    const router = useRouter();
    const [colorState, setColorState] = useState<'LIGHT' | 'DARK'>('LIGHT');

    return (
        <Flex justify='center' direction="row" w='100%' h='78px' px={[0,1,2,4]} bg='#F4F7F9' borderBottom='1px solid #EDF0F3'>  
            <Flex align='center' direction="row" w={['100%','90%','70%','70%']} minW='200px' maxW='1200px' h='100%' px={[0,1,2,4]}>
                <MdViewTimeline color='#625BF8' fontSize='34px' />
                <Text as='span' ml={2} color='#01122C' fontSize='27px' fontWeight={600} _hover={{cursor: 'pointer'}} onClick={() => router.push('/')}>timeblend.fyi</Text>
                <Flex align='center' ml='auto'>
                    <Flex align='center' justify='center' h='36px' mr={1} px={3} borderRadius={5} _hover={{bg: 'gray.200', cursor: 'pointer'}} onClick={() => router.push('/about')}>
                        <Text color='#01122C' fontWeight={600}>About</Text>
                    </Flex>
                    <Flex align='center' justify='center' w='36px' h='36px' mr={1} borderRadius={5} _hover={{bg: 'gray.200', cursor: 'pointer'}} onClick={() => setColorState(colorState === 'LIGHT' ? 'DARK' : 'LIGHT')}>
                        {colorState === 'LIGHT' && <HiOutlineMoon color='#969696' fontSize='20px' />}
                        {colorState === 'DARK' && <HiOutlineSun color='#969696' fontSize='20px' />}
                    </Flex>
                    <Flex align='center' justify='center' w='36px' h='36px' borderRadius={5} _hover={{bg: 'gray.200', cursor: 'pointer'}}>
                        <FiGithub color='#969696' fontSize='20px' />
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
};
export default Navbar;