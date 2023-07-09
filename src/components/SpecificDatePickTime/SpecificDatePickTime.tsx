import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { specificDateMatrixDay, specificDateMatrixDayResponse } from '@/types/event-model';
import IndividualWeekDayTime from '../IndividualWeekDayTime.tsx/IndividualWeekDayTime';

interface SpecificDatePickTimeProps {
    index: number;
    name: string;
    names: string[];
    hoverIndex: number;
    setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
    inspectCollab: number;
    setInspectCollab: React.Dispatch<React.SetStateAction<number>>;
    respondMode: 'DEFAULT' | 'USER' | 'USERWITHNAME';
    weekDayMatrix: specificDateMatrixDayResponse[];
    clickState: boolean;
    setClickState: React.Dispatch<React.SetStateAction<boolean>>;
    clientWeeklyDateMatrix: specificDateMatrixDay[]
    setClientWeeklyDateMatrix: React.Dispatch<React.SetStateAction<specificDateMatrixDay[]>>
}

const SpecificDatePickTime = ({
    index,
    name,
    names,
    hoverIndex,
    setHoverIndex,
    inspectCollab,
    setInspectCollab,
    respondMode,
    weekDayMatrix,
    clickState,
    setClickState,
    clientWeeklyDateMatrix,
    setClientWeeklyDateMatrix,
}: SpecificDatePickTimeProps) => {
    
    const [hours, setHours] = useState(0);
    const [renderNumbers, setRenderNumbers] = useState(false);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [day, setDay] = useState(weekDays[index]);

    return (
        <Flex align='center' direction="column" w='80px' h='100%' mr='2px' borderRadius={index === 0 ? '3px' : '0'}>   
           <Flex align='center' justify='center' direction='column' w='100%' h='60px' mt={0} mb={1} pt={4}  pb={4} bg='#F4F7F9' border='2px solid lightgray' borderTop='2px solid lightgray' borderBottom='2px solid lightgray' >
                <Text color='#808080' fontWeight={600}>{clientWeeklyDateMatrix[index].weekDay}</Text>
                <Text color='#808080' fontSize='11pt' fontWeight={600}>{clientWeeklyDateMatrix[index].numberDay} {clientWeeklyDateMatrix[index].month}</Text>
           </Flex>
           {clientWeeklyDateMatrix[index].timedResponses.map((t, i) => {
                return (
                    <IndividualWeekDayTime type='specific' setInspectCollab={setInspectCollab} inspectCollab={inspectCollab} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} name={name} names={names} respondMode={respondMode} key={i} i={i} dayIndex={index} clickState={clickState} setClickState={setClickState} clientWeeklyDateMatrix={clientWeeklyDateMatrix} setClientWeeklyDateMatrix={setClientWeeklyDateMatrix as any} />
                );
           })}
        </Flex>
    );
};
export default SpecificDatePickTime;