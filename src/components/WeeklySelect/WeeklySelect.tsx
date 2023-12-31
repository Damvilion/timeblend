import React, { useState } from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';
import { EventType } from '@/types/event-model';

interface WeeklySelectProps {
    eventForm: EventType;
    setEventForm: React.Dispatch<React.SetStateAction<EventType>>
}

const WeeklySelect = ({
    eventForm,
    setEventForm
}: WeeklySelectProps) => {
    const [clickState, setClickState] = useState(false);

    const updateDaySelected = (i: number) => {
        const updatedDays = [...eventForm.weeklyDateMatrix];
        updatedDays[i].weekDay = !eventForm.weeklyDateMatrix[i].weekDay;
        setEventForm((prev: EventType) => ({
            ...prev,
            weeklyDateMatrix: updatedDays,
        }));
    };

    return (
        <Flex  direction="column" w='100%' h='100%'>  
           <HStack ml={0.5} onMouseLeave={() => setClickState(false)} onMouseUp={() => setClickState(false)} spacing='3px'>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>S</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[0].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(0); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(0)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>M</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[1].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(1); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(1)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>T</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[2].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(2); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(2)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>W</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[3].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'} }onMouseDown={() => {updateDaySelected(3); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(3)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>T</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[4].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(4); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(4)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>F</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[5].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(5); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(5)}></Flex>
            </Flex>
            <Flex direction='column'>
                <Flex align='center' justify='center' w='44px' h='44px' bg='white' border='2px solid lightgray' borderRadius={4} userSelect='none'><Text color='#808080'>S</Text></Flex>
                <Flex w='44px' h='185px' mt={1} color='#808080' bg={eventForm.weeklyDateMatrix[6].weekDay === true ? '#625BF8' : '#E2E8F0'} border='2px solid lightgray' borderRadius={4} _hover={{cursor: 'pointer'}} onMouseDown={() => {updateDaySelected(6); setClickState(!clickState);}} onMouseOver={() => clickState && updateDaySelected(6)}></Flex>
            </Flex>
            
           </HStack>
        </Flex>
    );
};
export default WeeklySelect;