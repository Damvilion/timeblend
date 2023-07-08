import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { weeklyDateMatrixDayResponse } from '@/types/event-model';

interface IndividualWeekDayTimeProps {
    i: number;
    weekDayMatrix: weeklyDateMatrixDayResponse[];
    clickState: boolean;
    setClickState: React.Dispatch<React.SetStateAction<boolean>>
}

const IndividualWeekDayTime = ({
    i,
    weekDayMatrix,
    clickState,
    setClickState,
}: IndividualWeekDayTimeProps) => {

    const [selected, setSelected] = useState(false);

    return (
        <Flex key={i} w='80px' h='9px' mt={i === 0 ? '0px' : (i % 4 === 0 ? '2px' : '0px')} bg={selected ? '#625BF8' : '#E6E7F8'} _hover={{cursor: 'pointer', bg: selected ? '#625BF8' : 'gray.300'}} onMouseDown={() => {setSelected(!selected); setClickState(!clickState);}} onMouseOver={() => clickState && setSelected(!selected)} />
    );
};
export default IndividualWeekDayTime;