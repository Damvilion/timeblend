import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { weeklyDateMatrixDayResponse } from '@/types/event-model';
import IndividualWeekDayTime from '../IndividualWeekDayTime.tsx/IndividualWeekDayTime';

interface WeekDayPickTimeProps {
    index: number;
    weekDayMatrix: weeklyDateMatrixDayResponse[];
}

const WeekDayPickTime = ({
    index,
    weekDayMatrix,
}: WeekDayPickTimeProps) => {
    
    const [hours, setHours] = useState(0);
    const [renderNumbers, setRenderNumbers] = useState(false);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [day, setDay] = useState(weekDays[index]);

    return (
        <Flex align='center' direction="column" w='80px' h='100%' mr='2px' borderRadius={index === 0 ? '3px' : '0'}>   
           <Flex justify='center' w='100%' mt={0} ml='20px' pt={4} pb={4} bg='#F4F7F9' borderTop='2px solid lightgray' borderBottom='2px solid lightgray' >
                <Text color='#808080' fontWeight={600}>{day}</Text>
           </Flex>
           {weekDayMatrix.map((t, i) => {
                return (
                    <Flex key={i}  ml='0px'>
                        {/* <Text w='40px' mt={i % 4 === 0 ? '-5px' : '-9px'} mr={1} ml='30px' pl='auto' color='black' fontSize='9pt' textAlign='right'>test</Text> */}
                        <IndividualWeekDayTime i={i} weekDayMatrix={weekDayMatrix} />
                    </Flex>
                );
           })}
        </Flex>
    );
};
export default WeekDayPickTime;