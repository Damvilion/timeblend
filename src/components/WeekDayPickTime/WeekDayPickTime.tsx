import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { weeklyDateMatrixDay, weeklyDateMatrixDayResponse } from '@/types/event-model';
import IndividualWeekDayTime from '../IndividualWeekDayTime.tsx/IndividualWeekDayTime';

interface WeekDayPickTimeProps {
    index: number;
    name: string;
    names: string[];
    hoverIndex: number;
    setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
    inspectCollab: number;
    setInspectCollab: React.Dispatch<React.SetStateAction<number>>;
    respondMode: 'DEFAULT' | 'USER' | 'USERWITHNAME';
    weekDayMatrix: weeklyDateMatrixDayResponse[];
    clickState: boolean;
    setClickState: React.Dispatch<React.SetStateAction<boolean>>;
    clientWeeklyDateMatrix: weeklyDateMatrixDay[]
    setClientWeeklyDateMatrix: React.Dispatch<React.SetStateAction<weeklyDateMatrixDay[]>>
}

const WeekDayPickTime = ({
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
}: WeekDayPickTimeProps) => {
    
    const [hours, setHours] = useState(0);
    const [renderNumbers, setRenderNumbers] = useState(false);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [day, setDay] = useState(weekDays[index]);

    return (
        <Flex align='center' direction="column" w='80px' h='100%' mr='2px' borderRadius={index === 0 ? '3px' : '0'}>   
           <Flex justify='center' w='100%' mt={0} mb={1} pt={4}  pb={4} bg='#F4F7F9' border='2px solid lightgray' borderTop='2px solid lightgray' borderBottom='2px solid lightgray' >
                <Text color='#808080' fontWeight={600}>{day}</Text>
           </Flex>
           {weekDayMatrix.map((t, i) => {
                return (
                    <IndividualWeekDayTime type='weekly' setInspectCollab={setInspectCollab} inspectCollab={inspectCollab} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} name={name} names={names} respondMode={respondMode} key={i} i={i} dayIndex={index} clickState={clickState} setClickState={setClickState} clientWeeklyDateMatrix={clientWeeklyDateMatrix} setClientWeeklyDateMatrix={setClientWeeklyDateMatrix as any} />
                );
           })}
        </Flex>
    );
};
export default WeekDayPickTime;