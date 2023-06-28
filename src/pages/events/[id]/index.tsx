import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

// TODO REMOVE AFTER FIRESTORE DEV
const testRoutes = [
    'matt',
    'dam',
    'test',
    'lol'
];

export default function About({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    
    if (!id) {
        return (
            <Flex>
                <Text color='black'>Event not found</Text>
            </Flex>
        );
    }

    return (
        <Flex direction='column'>
            <Flex justify='center' direction='row' w='100%' h='140px' px={[0, 1, 2, 4]} bg='#F4F7F9'>
                <Flex align='center' direction='row' w={['100%', '90%', '70%', '70%']} minW='200px' maxW='1200px' h='100%' px={[0, 1, 2, 4]}>
                    <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='28px' fontWeight={600}>
                        {router.query.id }
                    </Text>
                </Flex>
            </Flex>
            {/* <Text color='#01122C'>modern scheduling tool to help you find the best communal time to meet. It was built by two computer science students at the University of Michigan. Thank you for using MeetingBrew!</Text> */}
        </Flex>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // get company data
    // try {
    //     const companyDocRef = doc(firestore, 'companies', context.query.companyName as string)
    //     const companyDoc = await getDoc(companyDocRef);
   
    //     return {
    //         props: {
    //             companyData: companyDoc.exists() ? JSON.parse(safeJsonStringify({
    //                 name: companyDoc.id,
    //                 ...companyDoc.data()
    //             })) : "",
    //         },
    //     };

    // } catch (error) {
    //     console.log('getServerSideProps error', error);
    // }
    try {
        if (testRoutes.includes(context.query.id as string)) {
            const id = context.query.id as string;
            return { props: { id } };
        } else {
            const id = null;
            return { props: { id } };
        }
    } catch {
        console.log('error');
    }
};
