import React, { useState } from 'react';
import { Checkbox, Flex, HStack, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { PiCalendarPlusBold, PiFunnelBold } from 'react-icons/pi';
import { BsCheckLg, BsLink } from 'react-icons/bs';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { db } from '@/firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { EventType, specificDateMatrixDay, weeklyDateMatrixDay } from '@/types/event-model';
import safeJsonStringify from 'safe-json-stringify';
import WeekDayPickTime from '@/components/WeekDayPickTime/WeekDayPickTime';
import SpecificDatePickTime from '@/components/SpecificDatePickTime/SpecificDatePickTime';

async function sleep(millisecond: number) {
    return new Promise((resolve) => setTimeout(resolve, millisecond));
}

interface EventPageProps {
    eventData: EventType;
    eventExists: boolean;
}

export default function About({ eventData, eventExists }: EventPageProps) {
    const router = useRouter();
    const [respondMode, setRespondMode] = useState<'DEFAULT' | 'USER' | 'USERWITHNAME'>('DEFAULT');
    const [inviteText, setInviteText] = useState('Invite');
    const [addingPerson, setAddingPerson] = useState<'RESPOND' | 'CANCEL' | 'DONE'>('RESPOND');
    const [saving, setSaving] = useState(false);
    const [displaySaving, setDisplaySaving] = useState(false);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [inspectCollab, setInspectCollab] = useState(-1);

    // used to view time in cal by responses
    const [hoverIndex, setHoverIndex] = useState(-1);

    const [clickState, setClickState] = useState(false);

    const [responseData, setResponseData] = useState(eventData);
    const [clientWeeklyDateMatrix, setClientWeeklyDateMatrix] = useState(responseData.type === 'weekly' ? responseData.weeklyDateMatrix : responseData.specificDateMatrix);

    const [names, setNames] = useState<string[]>(responseData.names);

    if (eventExists === false) {
        return (
            <Flex direction='column'>
                <Flex justify='center' direction='row' w='100%' h='140px' px={[2, 4, 5, 5]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0'>
                    <Flex
                        align='center'
                        direction='row'
                        w={['100%', '100%', '70%', '70%']}
                        minW='200px'
                        maxW='920px'
                        h='100%'
                        px={[0, 1, 2, 4]}
                        borderRight='1px dashed #dcdee0'
                        borderLeft='1px dashed #dcdee0'>
                        <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='38px' fontWeight={600}>
                            Event does not exist :(
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        );
    }

    const onCopyLink = async () => {
        setInviteText('Copied');
        navigator.clipboard.writeText(`https://timeblend.fyi/events/${router.query.id}`);
        await sleep(2000);
        setInviteText('Invite');
    };

    const onDone = async () => {
        setError('');
        setDisplaySaving(true);
        setSaving(true);

        const eventDocRef = doc(db, 'Events', responseData.id);

        if (responseData.type === 'weekly') {
            await updateDoc(eventDocRef, {
                weeklyDateMatrix: clientWeeklyDateMatrix,
            });
        } else {
            await updateDoc(eventDocRef, {
                specificDateMatrix: clientWeeklyDateMatrix,
            });
        }

        setAddingPerson('RESPOND');
        setRespondMode('DEFAULT');
    };

    const onRespond = async () => {
        // update doc name array with new person
        // update weeklyMatrix
        // display saving state
        setError('');
        setName('');
        
        if (addingPerson === 'CANCEL') {
            setRespondMode('DEFAULT');
            setAddingPerson('RESPOND');
        } else if (addingPerson === 'RESPOND') {
            setRespondMode('USER');
            setAddingPerson('CANCEL');
        } else {
            await onDone();
        }
        setDisplaySaving(false);
        setSaving(false);
        
    };

    const onSubmitResponse = async () => {
        setError('');
        if (name === '') {
            setError('Please enter a name');
            return;
        }

        // add name to client names
        if (names && names.length > 0) {
            if (names.includes(name)) {
                setError('Name already exists');
                return;
            }
            setNames([...names, name]);
        } else {
            setNames([name]);
        }

        setAddingPerson('DONE');
        setRespondMode('USERWITHNAME');
        setSaving(true);
        setDisplaySaving(true);
        
        // add name to firestore
        const eventDocRef = doc(db, 'Events', responseData.id);
        
        if (names && names.length > 0) {
            await updateDoc(eventDocRef, {
                names: [...names, name]
            });
        } else {
            await updateDoc(eventDocRef, {
                names: [name]
            });
        }
        
        setSaving(false);

        console.log(name);

    };

    const getTimeFromIndex = (sliceIndex: number) => {

        const timeString = responseData.labelArray[parseInt((sliceIndex/4).toString())];
        const endTimeString = responseData.labelArray[parseInt(((sliceIndex/4) + 1).toString())];

        let isAM = true;
        let isEndAM = true;

        let baseTime = '';
        let endBaseTime = '';
        if (timeString[timeString.length - 2] === 'A') {
            baseTime = timeString.split('A')[0];
            if (endTimeString[endTimeString.length - 2] === 'A') {
                endBaseTime = endTimeString.split('A')[0];
            } else {
                endBaseTime = endTimeString.split('P')[0];
                isEndAM = false;
            }
        } else {
            baseTime = timeString.split('P')[0];
            isAM = false;
            if (endTimeString[endTimeString.length - 2] === 'A') {
                endBaseTime = endTimeString.split('A')[0];
            } else {
                endBaseTime = endTimeString.split('P')[0];
                isEndAM = false;
            }
        }

        // const baseTime = responseData.labelArray[sliceIndex/4].split();
        const whereNum = (Math.round(parseFloat((sliceIndex/4).toFixed(2)) * 100) / 100).toFixed(2);

        if (whereNum[whereNum.length-2] === '0') {
            return `${baseTime.slice(0,-1)}:00 ${isAM ? 'AM' : 'PM'} - ${baseTime.slice(0,-1)}:15 ${isAM ? 'AM' : 'PM'}`;
        } else if (whereNum[whereNum.length-2] === '2') {
            return `${baseTime.slice(0,-1)}:15 ${isAM ? 'AM' : 'PM'} - ${baseTime.slice(0,-1)}:30 ${isAM ? 'AM' : 'PM'}`;
        } else if (whereNum[whereNum.length-2] === '5') {
            return `${baseTime.slice(0,-1)}:30 ${isAM ? 'AM' : 'PM'} - ${baseTime.slice(0,-1)}:45 ${isAM ? 'AM' : 'PM'}`;
        } else {
            return `${baseTime.slice(0,-1)}:45 ${isAM ? 'AM' : 'PM'} - ${endBaseTime.slice(0,-1)}:00 ${isEndAM ? 'AM' : 'PM'}`;
        }
    };

    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 2, 4, 4]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0'>
                <Flex align='center' direction='row' w='100%' minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Text mt='50px' mr={6} ml={[2, 10, 2, 2]} color='#625BF8' fontSize='40px' fontWeight={600}>
                        {responseData.title}
                    </Text>
                </Flex>
            </Flex>
            <Flex justify='center' direction='row' w='100%' h={['920px', '920px', '630px', '630px']} px={[0, 2, 4, 4]} bg='white'>
                <Flex direction='column' w='100%' minW='200px' maxW='800px' h='100%' px={[0, 1, 2, 4]} py={4} borderRight='1px dashed #dcdee0' borderLeft='1px dashed #dcdee0'>
                    <Flex align={['center', 'start', 'start', 'start']} direction={['column', 'column', 'row', 'row']} w='100%'>
                        <Flex direction='column' w='33%' minW='320px' ml={2}>
                            <Flex>
                                <Flex
                                    align='center'
                                    justify='center'
                                    maxW='170px'
                                    h='52px'
                                    mt={4}
                                    mr={1}
                                    px={3}
                                    bg='#E6E7F9'
                                    borderRadius={5}
                                    shadow='0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);'
                                    _hover={{ transform: 'translateY(-1px)', bg: '#ebecfc', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);' }}
                                    userSelect='none'
                                    onClick={onRespond}
                                    >
                                    <HStack>
                                        {addingPerson === 'CANCEL' && <HiOutlineArrowSmLeft color='#625BF8' fontSize='18pt' />}
                                        {addingPerson === 'RESPOND' && <PiCalendarPlusBold color='#625BF8' fontSize='18pt' />}
                                        {addingPerson === 'DONE' && <BsCheckLg color='#625BF8' fontSize='18pt' />}
                                        <Text color='#625BF8' fontSize='16pt' fontWeight={600}>
                                            {addingPerson === 'CANCEL' && 'Cancel'}
                                            {addingPerson === 'RESPOND' && 'Respond'}
                                            {addingPerson === 'DONE' && 'Done'}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex
                                    align='center'
                                    justify='center'
                                    w='170px'
                                    maxW='130px'
                                    h='52px'
                                    mt={4}
                                    mr={1}
                                    ml={4}
                                    bg='#FFF'
                                    border='2px solid #F4F7F9'
                                    borderRadius={5}
                                    shadow='0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);'
                                    _hover={{ transform: 'translateY(-1px)', bg: '#F9f9f9', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);' }}
                                    userSelect='none'
                                    onClick={onCopyLink}>
                                    <HStack>
                                        {inviteText === 'Invite' && <BsLink color='#625BF8' fontSize='18pt' />}
                                        {inviteText === 'Copied' && <BsCheckLg color='#625BF8' fontSize='18pt' />}
                                        <Text color='#625BF8' fontSize='16pt' fontWeight={600}>
                                            {inviteText}
                                        </Text>
                                    </HStack>
                                </Flex>
                            </Flex>
                            
                            <HStack align='center' h='26px' mt={5} ml={5}>
                                <PiFunnelBold color='#818181' fontWeight={600} fontSize='15.5pt' />
                                <Text color='#818181' fontSize={hoverIndex === -1 ? '15pt' : '13.5pt'} fontWeight={600}>
                                    {hoverIndex === -1 ? 'Responses' : getTimeFromIndex(hoverIndex)}
                                </Text>
                                <Text mt={1} color='lightgray' fontSize='12pt' fontWeight={600}>
                                    {displaySaving && saving && 'Auto Saving...'}
                                    {displaySaving && !saving && 'Saved.'}
                                </Text>
                            </HStack>
                            
                            <Flex direction='column' mt={3} ml='22px'>
                            {respondMode === 'USER' && 
                                <Flex align='center' mb={3.5}>
                                    <Input
                                        maxW='165px'
                                        h='32px'
                                        px={2}
                                        color='#00142C'
                                        fontSize='13pt'
                                        fontWeight={600}
                                        bg='#F4F7F9'
                                        border='2px solid lightgray'
                                        borderRadius={2}
                                        _hover={{ border: '2px solid #7A84E8' }}
                                        _focus={{ boxShadow: 'none', outline: 'none', border: '2px solid #7A84E8' }}
                                        _placeholder={{ color: 'gray' }}
                                        maxLength={18}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder='Name'
                                        spellCheck='false'
                                        value={name}
                                    />
                                    <Flex align='center' justify='center' w='28.5px' h='28.5px' ml={2.5} bg='#625BF8' _hover={{ cursor: 'pointer', bg: '#8983fc' }} onClick={onSubmitResponse}>
                                        <BsCheckLg fontSize='20px' />
                                    </Flex>
                                </Flex>
                                }
                                {error && <Text mt={-3} mb="-12px" ml={0} color='red.300' fontWeight={600}>{error}</Text>}
                                <Flex direction='column' mt={2}>
                                    {names?.map((n, i) => {
                                        return (
                                            <Flex key={i} align='center' mt={1.5}>
                                                <Checkbox w='20px' h='20px' p={0} borderColor='#D3D3D3' borderRadius={3} colorScheme='twitter' defaultChecked={n === name} disabled={respondMode === 'USERWITHNAME' && n !== name || respondMode === 'USER' && n !== name} size='lg' />
                                                <Text ml={2.5} color='#00132C' fontSize='15pt' fontWeight={600}>
                                                    {n.charAt(0).toUpperCase() + n.slice(1)}
                                                </Text>
                                            </Flex>
                                        );
                                    })}
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction='column' w='66%' minW='350px' ml={0}>
                            <Flex align='center' px={6}>
                                <Text mt={4} color='#00142C' fontWeight={600}>{`0/${names.length}`}</Text>
                                <Flex
                                    align='center'
                                    justify='center'
                                    w='270px'
                                    h='52px'
                                    mt={4}
                                    mr={1}
                                    ml={2}
                                    px={3}
                                    bg='#E6E7F9'
                                    
                                    borderRadius={5}
                                    shadow='0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);'
                                    _hover={{ transform: 'translateY(-1px)', bg: '#ebecfc', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);' }}
                                    onMouseLeave={() => setInspectCollab(-1)}>
                                    <HStack h='100%' spacing={0}>
                                        {['white', ...names].map((r, i) => {
                                            return (
                                                <Flex
                                                    key={i}
                                                    align='center'
                                                    justify='center'
                                                    w={`${270 / (names.length + 1)}px`}
                                                    h='100%'
                                                    bg={names.length === 0 ? '#E6E7F8' : '#625BF8'}
                                                    opacity={i / (names.length)}
                                                    borderRightRadius={i === names.length ? 5 : 0}
                                                    borderLeftRadius={names.length === 0 ? 5 : 0}
                                                    onMouseEnter={() => setInspectCollab(i)}
                                                    onMouseOver={() => setInspectCollab(i)}
                                                />
                                            );
                                        })}
                                    </HStack>
                                </Flex>
                                <Text mt={4} ml={1} color='#00142C' fontWeight={600}>{`${names.length}/${names.length}`}</Text>
                            </Flex>
                            <Flex>
                                <Flex direction='column' w='50px' mt='52.5px'>
                                    {responseData.labelArray.map((l, i) => {
                                        return (
                                            <Text key={i} mt='18.3px' color='#00142C' fontSize='13px' fontWeight={600} textAlign='right'>{l}</Text>
                                        );
                                    })}
                                </Flex>
                                <Flex overflowY='scroll' maxW='430px' mt={5} mr='auto' ml={2} pl={0} onMouseLeave={() => {setClickState(false); setHoverIndex(-1);}} onMouseUp={() => setClickState(false)}>
                                        
                                        {responseData.type === 'weekly' && clientWeeklyDateMatrix.map((d, i) => {
                                            if (d.weekDay === false) return;

                                            return <WeekDayPickTime inspectCollab={inspectCollab} setInspectCollab={setInspectCollab} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} name={name} names={names} respondMode={respondMode} index={i} key={i} clickState={clickState} setClickState={setClickState} weekDayMatrix={d.timedResponses} clientWeeklyDateMatrix={clientWeeklyDateMatrix as weeklyDateMatrixDay[]} setClientWeeklyDateMatrix={setClientWeeklyDateMatrix as React.Dispatch<React.SetStateAction<weeklyDateMatrixDay[]>>} />;
                                        })}
                                        {responseData.type ==='specific' && clientWeeklyDateMatrix.map((d,i) => {
                                            return <SpecificDatePickTime inspectCollab={inspectCollab} setInspectCollab={setInspectCollab} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} name={name} names={names} respondMode={respondMode} index={i} key={i} clickState={clickState} setClickState={setClickState} weekDayMatrix={d.timedResponses} clientWeeklyDateMatrix={clientWeeklyDateMatrix as specificDateMatrixDay[]} setClientWeeklyDateMatrix={setClientWeeklyDateMatrix as React.Dispatch<React.SetStateAction<specificDateMatrixDay[]>>} />;
                                        })}
                                </Flex>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {/* <Text color='#01122C'>modern scheduling tool to help you find the best communal time to meet. It was built by two computer science students at the University of Michigan. Thank you for using MeetingBrew!</Text> */}
        </Flex>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // get company data
    try {
        const eventDocRef = doc(db, 'Events', context.query.id as string);
        const eventDoc = await getDoc(eventDocRef);

        const nullData = {
            id: '',
            title: '',
            type: 'weekly',
            specificDays: [],
            beginTime: '',
            endTime: '',
            blendMatrix: [],
            weeklyDateMatrix: [],
            names: [],
            labelArray: [],
        };

        return {
            props: {
                eventExists: eventDoc.exists(),
                eventData:  eventDoc.exists() ? JSON.parse(safeJsonStringify(eventDoc.data())) : nullData,
            },
        };
    } catch (error) {
        console.log('getServerSideProps error', error);
    }
}
