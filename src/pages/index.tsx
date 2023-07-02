import React, { useState } from 'react';
import { Flex, HStack, Input, Menu, MenuButton, MenuItem, MenuList, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import ReactCalendar from '@/components/Calendar/ReactCalendar';
import WeeklySelect from '@/components/WeeklySelect/WeeklySelect';

export default function Home() {
    const [sliderValue, setSliderValue] = useState([9, 17]);
    const [eventType, setEventType] = useState<eventType['type']>('specific');

    const getEventTypeString = (s: eventType['type']) => {
        switch (eventType) {
            case 'specific':
                return 'Specific Dates';
            case 'weekly':
                return 'Days of Week';
            default:
                return '';
        }
    };

    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 2, 4, 4]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0'>
                <Flex align='center' direction='row' w='100%' minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt='50px' mr={6} ml={[2, 10, 2, 2]} color='#625BF8' fontSize='40px' fontWeight={600}>
                        Create an Event
                    </Text>
                    {/* <Flex align='center' h='26px' mt='61px' px={2} border='1.5px dashed #00132C' borderRadius={4}>
                    <Text color='#00132C'>+</Text>
                </Flex> */}
                </Flex>
            </Flex>
            <Flex justify='center' direction='row' w='100%' h={['920px', '920px', '630px', '630px']} px={[0, 2, 4, 4]} bg='white'>
                <Flex direction='column' w='100%' minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} py={4} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Flex align={['center', 'center', 'start', 'start']} direction={['column', 'column', 'row', 'row']} w='100%'>
                        <Flex direction='column' w={['100%', '100%', '100%', '50%']}>
                            <Text ml={[2, 10, 2, 2]} color='#00132C' fontSize='26px' fontWeight={600}>
                                Enter a Title
                            </Text>
                            <Input
                                maxW='340px'
                                h='40px'
                                mt='16px'
                                ml={[2, 10, 2, 2]}
                                color='gray.600'
                                fontSize='16px'
                                fontWeight={600}
                                bg='#F7F7F7'
                                border='2px solid lightgray'
                                borderRadius={4}
                                _hover={{ border: '2px solid #7A84E8' }}
                                _focus={{ boxShadow: 'none', outline: 'none', border: '2px solid #7A84E8' }}
                                _placeholder={{ color: 'gray' }}
                                placeholder='Ex: Coding Session'
                                spellCheck='false'
                            />

                            <Text mt={9} ml={[2, 10, 2, 2]} color='#00132C' fontSize='26px' fontWeight={600}>
                                Time Range
                            </Text>
                            <Flex mt={3} ml={[2, 10, 2, 2]} color='#00142C' fontWeight={600}>
                                <Text fontSize='18.5pt'>{sliderValue[0] % 12 === 0 ? 12 : sliderValue[0] % 12}&nbsp;</Text>
                                <Text mt='7px' fontSize='13.5pt'>
                                    {sliderValue[0] < 12 || sliderValue[0] === 24 ? 'AM' : 'PM'}&nbsp;&nbsp;
                                </Text>
                                <Text fontSize='18.5pt'>-&nbsp;&nbsp;</Text>
                                <Text fontSize='18.5pt'>{sliderValue[1] % 12 === 0 ? 12 : sliderValue[1] % 12}&nbsp;</Text>
                                <Text mt='7px' fontSize='13.5pt'>
                                    {sliderValue[1] < 12 || sliderValue[1] === 24 ? 'AM' : 'PM'}&nbsp;&nbsp;
                                </Text>
                            </Flex>
                            <RangeSlider
                                maxW='340px'
                                mt={3}
                                ml={[2.5, 10, 2.5, 2.5]}
                                aria-label={['min', 'max']}
                                defaultValue={[9, 17]}
                                max={24}
                                min={0}
                                minStepsBetweenThumbs={1}
                                onChange={(val) => setSliderValue(val)}
                                step={1}>
                                <RangeSliderTrack maxW='340px' h='7px' bg='gray.200'>
                                    <RangeSliderFilledTrack bg='#625BF8' />
                                </RangeSliderTrack>
                                <RangeSliderThumb w='18px' h='18px' bg='#625BF8' borderRadius={0} _focus={{ outline: 'none', boxShadow: 'none' }} index={0} />
                                <RangeSliderThumb w='18px' h='18px' bg='#625BF8' borderRadius={0} _focus={{ outline: 'none', boxShadow: 'none' }} index={1} />
                            </RangeSlider>

                            <Flex maxW='340px' mt={1} ml={[3, '42px', 3, 3]} fontSize='13.5px'>
                                <Text mr={-1} ml={-1} color='#818181'>
                                    12
                                </Text>
                                <Text ml='32px' color='#818181'>
                                    3
                                </Text>
                                <Text ml='35px' color='#818181'>
                                    6
                                </Text>
                                <Text ml='34px' color='#818181'>
                                    9
                                </Text>
                                <Text ml='32px' color='#818181'>
                                    12
                                </Text>
                                <Text ml='33px' color='#818181'>
                                    3
                                </Text>
                                <Text ml='35px' color='#818181'>
                                    6
                                </Text>
                                <Text ml='34px' color='#818181'>
                                    9
                                </Text>
                                <Text mr={-1} ml='auto' color='#818181'>
                                    12
                                </Text>
                            </Flex>
                            {/* <Text mt={4} ml={2} color='#00132C' fontSize='24px' fontWeight={600}>Custom URL (optional)</Text> */}
                        </Flex>
                        <Flex direction='column' w={['100%', '100%', '100%', '50%']} mt={['34px', '34px', '0', '0']}>
                            <Text ml={[2, 10, 2, 2]} color='#00132C' fontSize='26px' fontWeight={600}>
                                Select Dates
                            </Text>
                            <Menu>
                                <MenuButton
                                    w='330px'
                                    h='40px'
                                    mt='15px'
                                    ml={[2, 10, 2, 2]}
                                    pr='14px'
                                    pl='14px'
                                    color='#00142C'
                                    bg='#F7F7F7'
                                    border='2px solid lightgray'
                                    borderRadius={4}
                                    aria-label='Options'>
                                    <HStack w='100%'>
                                        <Text mr='auto'>{getEventTypeString(eventType)}</Text>
                                        <FiChevronDown />
                                    </HStack>
                                </MenuButton>
                                <MenuList
                                    w='330px'
                                    py={0}
                                    color='#00142C'
                                    bg='#F7F7F7'
                                    border='2px solid #d3d3d3'
                                    borderRadius={4}
                                    shadow='xl'
                                    motionProps={{
                                        transition: { duration: 40000 },
                                        animate: 'visible',
                                    }}>
                                    <MenuItem
                                        h='40px'
                                        color={eventType === 'specific' ? 'white' : '#00142C'}
                                        bg={eventType === 'specific' ? '#625BF8' : 'white'}
                                        borderTopRadius={4}
                                        _hover={{ bg: eventType === 'specific' ? '#625BF8' : '#9c96ff', color: 'white' }}
                                        onClick={() => setEventType('specific')}>
                                        Specific Dates
                                    </MenuItem>
                                    <MenuItem
                                        h='40px'
                                        color={eventType === 'weekly' ? 'white' : '#00142C'}
                                        bg={eventType === 'weekly' ? '#625BF8' : 'white'}
                                        borderBottomRadius={4}
                                        _hover={{ bg: eventType === 'weekly' ? '#625BF8' : '#c1befa', color: 'white' }}
                                        onClick={() => setEventType('weekly')}>
                                        Days of Week
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Flex mt='9' mb={2} ml={[2, 10, 2, 2]}>
                                {eventType === 'specific' && <ReactCalendar sliderValue={sliderValue} />}
                                {eventType === 'weekly' && <WeeklySelect />}
                            </Flex>
                            <Text ml={[2, 10, 2, 2]} color='#717171' fontSize='11.5pt'>
                                Click and drag to select date ranges.
                            </Text>
                        </Flex>
                        {/* <Flex direction='column' maxW='240px'>
                            <Text ml={2} color='#00132C' fontSize='24px' fontWeight={600}>Timezone</Text>
                            <Menu>
                                <MenuButton
                                    h='40px'
                                    mt={2.5}
                                    ml={2}
                                    pr='14px'
                                    pl="14px"
                                    color='#00142C'
                                    bg='#F7F7F7'
                                    border='2px solid lightgray'
                                    borderRadius={4}
                                    aria-label='Options'
                                >
                                    <HStack w='100%'>
                                        <Text mr='auto'>CST</Text>
                                        <FiChevronDown />
                                    </HStack>
                                </MenuButton>
                                <MenuList w='240px' py={0} color='#00142C' bg='#F7F7F7' border='2px solid #d3d3d3' borderRadius={4} shadow='xl' motionProps={{
                                    transition: { duration: 40000 },
                                    animate: 'visible'}}>
                                    <MenuItem h='40px' color={eventType === 'specific' ? 'white' : '#00142C'} bg={eventType === 'specific' ? '#625BF8' : 'white'} borderTopRadius={4} _hover={{bg: eventType === 'specific' ? '#625BF8' : '#9c96ff', color: 'white'}} onClick={() => setEventType('specific')}>
                                        Specific Dates
                                    </MenuItem>
                                    <MenuItem h='40px' color={eventType === 'weekly' ? 'white' : '#00142C'} bg={eventType === 'weekly' ? '#625BF8' : 'white'} borderBottomRadius={4} _hover={{bg: eventType === 'weekly' ? '#625BF8' : '#c1befa', color: 'white'}} onClick={() => setEventType('weekly')}>
                                        Days of Week
                                    </MenuItem>
                                    
                                </MenuList>
                            </Menu>
                        </Flex> */}
                    </Flex>
                    <Flex justify='center' direction='column' w='340px' mt={['-16px', '-16px', '-100px', '-100px']} ml={[2, 10, 2, 2]}>
                        <Flex align='center' mt={10}>
                            <Text color='#00132C' fontSize='22px'>
                                timeblend.fyi/events/
                            </Text>
                            <Input
                                w='200px'
                                h='28px'
                                ml={1}
                                px={2}
                                color='gray.700'
                                fontSize='15px'
                                fontWeight={500}
                                bg='#F7F7F7'
                                border='2px solid lightgray'
                                borderRadius={4}
                                _hover={{ border: '2px solid #7A84E8' }}
                                _focus={{ boxShadow: 'none', outline: 'none', border: '2px solid #7A84E8' }}
                                _placeholder={{ color: 'gray' }}
                                placeholder='custom id'
                                spellCheck='false'
                            />
                        </Flex>
                        <Text mt={1} color='#717171' fontSize='11.5pt'>
                            You can optionally set a custom id that will appear in the link of your timeblend.
                        </Text>
                    </Flex>
                    <Flex
                        align='center'
                        justify='center'
                        flexShrink='0'
                        maxW='190px'
                        h='52px'
                        mt={10}
                        mr={1}
                        mb={10}
                        ml={[2, 10, 2, 2]}
                        px={3}
                        bg='#E6E7F9'
                        borderRadius={5}
                        shadow='0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);'
                        _hover={{ transform: 'translateY(-1px)', bg: '#ebecfc', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);' }}>
                        <Text color='#625BF8' fontSize='16pt' fontWeight={600}>
                            Create Event +
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
