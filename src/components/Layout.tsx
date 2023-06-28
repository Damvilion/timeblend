import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar';

type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <Flex direction="column" w='100%' h='100%'>  
            <Navbar />
            <main>{children}</main>
        </Flex>
    );
};
export default Layout;