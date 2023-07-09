import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

interface IndividualWeekDayTimeProps<T> {
    i: number;
    type: 'weekly' | 'specific';
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
    clientWeeklyDateMatrix: T;
    setClientWeeklyDateMatrix: React.Dispatch<React.SetStateAction<T>>;
}

const IndividualWeekDayTime = function <T>({
    i,
    type,
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
}: IndividualWeekDayTimeProps<T>) {

    const [selected, setSelected] = useState(false);
    const [collabs, setCollabs] = useState((clientWeeklyDateMatrix as any)[dayIndex].timedResponses[i].numTimeResponses);

    useEffect(() => {
        setSelected(false);
        setCollabs((clientWeeklyDateMatrix as any)[dayIndex].timedResponses[i].numTimeResponses);
    }, [respondMode]);

    const updateMatrixSelection = () => {
        const newMatrix = [...clientWeeklyDateMatrix as any];

        if (newMatrix[dayIndex].timedResponses[i].names && 
            newMatrix[dayIndex].timedResponses[i].names.length > 0 &&
            newMatrix[dayIndex].timedResponses[i].names.includes(name)
        ) {
            newMatrix[dayIndex].timedResponses[i].names = newMatrix[dayIndex].timedResponses[i].names.filter((n: any) => n !== name);
            newMatrix[dayIndex].timedResponses[i].numTimeResponses -= 1;
            if (type === 'weekly') setClientWeeklyDateMatrix(newMatrix as T);
            if (type === 'specific') setClientWeeklyDateMatrix(newMatrix as T);
            
            return;
        }

        newMatrix[dayIndex].timedResponses[i].names.push(name);
        newMatrix[dayIndex].timedResponses[i].numTimeResponses += 1;

        if (type === 'weekly') setClientWeeklyDateMatrix(newMatrix as T);
        if (type === 'specific') setClientWeeklyDateMatrix(newMatrix as T);
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