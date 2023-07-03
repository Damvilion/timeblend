import React, { useState } from 'react';
import { Checkbox, Flex, HStack, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { PiCalendarPlusBold, PiFunnelBold } from 'react-icons/pi';
import { BsCheckLg, BsLink } from 'react-icons/bs';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { db } from '@/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { EventType } from '@/types/event-model';
import safeJsonStringify from 'safe-json-stringify';

async function sleep(millisecond: number) {
    return new Promise((resolve) => setTimeout(resolve, millisecond));
}

interface EventPageProps {
    eventData: EventType | '';
}

export default function About({ eventData }: EventPageProps) {
    const router = useRouter();
    const [inviteText, setInviteText] = useState('Invite');
    const [addingPerson, setAddingPerson] = useState(false);

    const [responseData, setResponseData] = useState(eventData);

    if (responseData === '') {
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

    const onRespond = () => {
        setAddingPerson(!addingPerson);
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
                        <Flex direction='column' w='40%' minW='320px' ml={2}>
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
                                    onClick={onRespond}>
                                    <HStack>
                                        {addingPerson === true && <HiOutlineArrowSmLeft color='#625BF8' fontSize='18pt' />}
                                        {addingPerson === false && <PiCalendarPlusBold color='#625BF8' fontSize='18pt' />}
                                        <Text color='#625BF8' fontSize='16pt' fontWeight={600}>
                                            {addingPerson ? 'Cancel' : 'Respond'}
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
                            <HStack mt={5} ml={5}>
                                <PiFunnelBold color='#818181' fontWeight={600} fontSize='15.5pt' />
                                <Text color='#818181' fontSize='15pt' fontWeight={600}>
                                    Responses
                                </Text>
                            </HStack>
                            <Flex direction='column' mt={3} ml='22px'>
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
                                        placeholder='Name'
                                        spellCheck='false'
                                    />
                                    <Flex align='center' justify='center' w='28.5px' h='28.5px' ml={2.5} bg='#625BF8' _hover={{ cursor: 'pointer', bg: '#8983fc' }}>
                                        <BsCheckLg fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex align='center' mt={1.5}>
                                    <Checkbox w='20px' h='20px' p={0} borderColor='#D3D3D3' borderRadius={3} colorScheme='twitter' size='lg' />
                                    <Text ml={2.5} color='#00132C' fontSize='15pt' fontWeight={600}>
                                        Matt
                                    </Text>
                                </Flex>
                                <Flex align='center' mt={1.5}>
                                    <Checkbox w='20px' h='20px' p={0} borderColor='#D3D3D3' borderRadius={3} colorScheme='twitter' size='lg' />
                                    <Text ml={2.5} color='#00132C' fontSize='15pt' fontWeight={600}>
                                        Matt
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction='column' w='60%' minW='350px' ml={2}>
                            <Flex align='center' px={2}>
                                <Text mt={4} color='#00142C' fontWeight={600}>{`0/${responseData.blendMatrix.length}`}</Text>
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
                                    _hover={{ transform: 'translateY(-1px)', bg: '#ebecfc', cursor: 'pointer', boxShadow: '0 7px 14px rgba(50, 50, 93, 0.08), 0 3px 2px rgba(0, 0, 0, 0.06);' }}>
                                    <HStack h='100%' spacing={0}>
                                        {responseData.blendMatrix.map((r, i) => {
                                            return (
                                                <Flex
                                                    key={r.personName}
                                                    align='center'
                                                    justify='center'
                                                    w={`${270 / responseData.blendMatrix.length}px`}
                                                    h='100%'
                                                    bg='#8983FC'
                                                    opacity={i / (responseData.blendMatrix.length - 1)}
                                                    borderRightRadius={i === responseData.blendMatrix.length - 1 ? 5 : 0}
                                                />
                                            );
                                        })}
                                    </HStack>
                                </Flex>
                                <Text mt={4} ml={1} color='#00142C' fontWeight={600}>{`${responseData.blendMatrix.length}/${responseData.blendMatrix.length}`}</Text>
                            </Flex>
                            <HStack mt={5} ml={5}>
                                <PiFunnelBold color='#818181' fontWeight={600} fontSize='15.5pt' />
                                <Text color='#818181' fontSize='15pt' fontWeight={600}>
                                    Responses
                                </Text>
                            </HStack>
                            <Flex direction='column' mt={3} ml='22px'>
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
                                        placeholder='Name'
                                        spellCheck='false'
                                    />
                                    <Flex align='center' justify='center' w='28.5px' h='28.5px' ml={2.5} bg='#625BF8' _hover={{ cursor: 'pointer', bg: '#8983fc' }}>
                                        <BsCheckLg fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex align='center' mt={1.5}>
                                    <Checkbox w='20px' h='20px' p={0} borderColor='#D3D3D3' borderRadius={3} colorScheme='twitter' size='lg' />
                                    <Text ml={2.5} color='#00132C' fontSize='15pt' fontWeight={600}>
                                        Matt
                                    </Text>
                                </Flex>
                                <Flex align='center' mt={1.5}>
                                    <Checkbox w='20px' h='20px' p={0} borderColor='#D3D3D3' borderRadius={3} colorScheme='twitter' size='lg' />
                                    <Text ml={2.5} color='#00132C' fontSize='15pt' fontWeight={600}>
                                        Matt
                                    </Text>
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

        return {
            props: {
                eventData: eventDoc.exists() ? JSON.parse(safeJsonStringify(eventDoc.data())) : '',
            },
        };
    } catch (error) {
        console.log('getServerSideProps error', error);
    }
}
