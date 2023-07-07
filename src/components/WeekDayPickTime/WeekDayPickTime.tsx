import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface WeekDayPickTimeProps {
    index: number;
    day: string;
    labelArray: string[],
}

const WeekDayPickTime = ({
    index,
    day,
    labelArray,
}: WeekDayPickTimeProps) => {
    
    const [hours, setHours] = useState(0);
    const [renderNumbers, setRenderNumbers] = useState(false);

    return (
        <Flex align='center' direction="column" w='80px' h='100%' borderRadius={index === 0 ? '3px' : '0'}>   
           <Flex justify='center' w='100%' mt={0} ml='60px' pt={4} pb={4} bg='#F4F7F9' borderTop='2px solid lightgray' borderBottom='2px solid lightgray' >
                <Text color='#808080' fontWeight={600}>{day}</Text>
           </Flex>
           {labelArray.map((e, i) => {
                return (
                    <Flex  key={i}>
                        <Text w='40px' mt='-9px' mr={1} ml='30px' pl='auto' color='black' fontSize='9pt' textAlign='right'>{labelArray[i]}</Text>
                        <Flex key={i} w='84px' h='36px' mt={i === 0 ? '0px' : '2px'} mr='10px' bg='blue.100' />
                    </Flex>
                );
           })}
        </Flex>
    );
};
export default WeekDayPickTime;