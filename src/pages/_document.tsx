import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, theme } from '@chakra-ui/react';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <body style={{ backgroundColor: '#FFF' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
