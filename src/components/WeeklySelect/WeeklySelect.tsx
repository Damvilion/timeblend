import React, { useState } from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';

const WeeklySelect:React.FC = () => {
    const [daySelected, setDaySelected] = useState([false, false, false, false, false, false, false]);
    const [clickState, setClickState] = useState(false);

    const updateDaySelected = (i: number) => {
        const updatedDays = [...daySelected];
        updatedDays[i] = !daySelected[i];
        setDaySelected(updatedDays);
    };

    return (
        <Flex  direction="column" w='100%' h='100%'>  
           <HStack ml={0.5} onMouseLeave={() => setClickState(false)} onMouseUp={() => setClickState(false)} spacing='3px'>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>S</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[0] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(0); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(0)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>M</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[1] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(1); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(1)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>T</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[2] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(2); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(2)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>W</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[3] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'} }onMouseDown={() => {updateDaySelected(3); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(3)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>T</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[4] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(4); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(4)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>F</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[5] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(5); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(5)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>S</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={daySelected[6] === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(6); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(6)}></Flex>
            </Flex>
            
           </HStack>
        </Flex>
    );
};
export default WeeklySelect;