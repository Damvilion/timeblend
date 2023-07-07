import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { weeklyDateMatrixDayResponse } from '@/types/event-model';

interface IndividualWeekDayTimeProps {
    i: number;
    weekDayMatrix: weeklyDateMatrixDayResponse[];
}

const IndividualWeekDayTime = ({
    i,
    weekDayMatrix,
}: IndividualWeekDayTimeProps) => {

    const [selected, setSelected] = useState(false);

    return (
        <Flex key={i} w='80px' h='9px' mt={i === 0 ? '0px' : (i % 4 === 0 ? '2px' : '0px')} mr='10px' ml='30px' bg={selected ? 'purple.400' : '#E6E7F8'} onClick={() => setSelected(!selected)} />
    );
};
export default IndividualWeekDayTime;