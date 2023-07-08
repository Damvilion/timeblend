import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { weeklyDateMatrixDay } from '@/types/event-model';

interface IndividualWeekDayTimeProps {
    i: number;
    name: string;
    names: string[];
    hoverIndex: number;
    setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
    inspectCollab: number;
    setInspectCollab: React.Dispatch<React.SetStateAction<number>>
    respondMode: 'DEFAULT' | 'USER' | 'USERWITHNAME';
    dayIndex: number;
    clickState: boolean;
    setClickState: React.Dispatch<React.SetStateAction<boolean>>;
    clientWeeklyDateMatrix: weeklyDateMatrixDay[]
    setClientWeeklyDateMatrix: React.Dispatch<React.SetStateAction<weeklyDateMatrixDay[]>>
}

const IndividualWeekDayTime = ({
    i,
    name,
    names,
    hoverIndex,
    setHoverIndex,
    inspectCollab,
    setInspectCollab,
    respondMode,
    dayIndex,
    clickState,
    setClickState,
    clientWeeklyDateMatrix,
    setClientWeeklyDateMatrix,
}: IndividualWeekDayTimeProps) => {

    const [selected, setSelected] = useState(false);
    const [collabs, setCollabs] = useState(clientWeeklyDateMatrix[dayIndex].timedResponses[i].numTimeResponses);

    useEffect(() => {
        setSelected(false);
        setCollabs(clientWeeklyDateMatrix[dayIndex].timedResponses[i].numTimeResponses);
    }, [respondMode]);

    const updateMatrixSelection = () => {
        const newMatrix = [...clientWeeklyDateMatrix];

        if (newMatrix[dayIndex].timedResponses[i].names && 
            newMatrix[dayIndex].timedResponses[i].names.length > 0 &&
            newMatrix[dayIndex].timedResponses[i].names.includes(name)
        ) {
            newMatrix[dayIndex].timedResponses[i].names = newMatrix[dayIndex].timedResponses[i].names.filter(n => n !== name);
            newMatrix[dayIndex].timedResponses[i].numTimeResponses -= 1;
            setClientWeeklyDateMatrix(newMatrix);
            return;
        }

        newMatrix[dayIndex].timedResponses[i].names.push(name);
        newMatrix[dayIndex].timedResponses[i].numTimeResponses += 1;

        setClientWeeklyDateMatrix(newMatrix);
        return;
    };

    const handleMouse = () => {
        if (clickState) {
            setSelected(!selected);
            updateMatrixSelection();
            
        }
    };

    if (respondMode === 'DEFAULT' || respondMode === 'USER') {
        return (
            <Flex key={i} w='80px' h='9px' mt={i === 0 ? '0px' : (i % 4 === 0 ? '2px' : '0px')} bg={inspectCollab === -1 ? (collabs === 0 ? '#E6E7F8' : '#625BF8') : (collabs === inspectCollab ? (inspectCollab === 0) ? '#E6E7F8' : '#625BF8' : '#E6E7F8')} opacity={inspectCollab === -1 ? (collabs === 0 ? 1 : collabs / (names.length)) : (collabs === inspectCollab ? (collabs / (names.length)) === 0 ? 1 : collabs / (names.length) : 1)} _hover={{bg: selected ? '#625BF8' : 'gray.300'}} onMouseOver={() => setHoverIndex(i)} />
        );
    } else {
        return (
            <Flex key={i} w='80px' h='9px' mt={i === 0 ? '0px' : (i % 4 === 0 ? '2px' : '0px')} bg={selected ? '#625BF8' : '#E6E7F8'} _hover={{cursor: 'pointer', bg: selected ? '#625BF8' : 'gray.300'}} onMouseDown={() => {setSelected(!selected); setClickState(!clickState); updateMatrixSelection();}} onMouseOver={handleMouse} />
        );
    }
    
};
export default IndividualWeekDayTime;