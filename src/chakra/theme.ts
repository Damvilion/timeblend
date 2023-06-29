/* eslint-disable @typescript-eslint/no-explicit-any */
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

import '@fontsource/nunito';
import '@fontsource/sora';
import '@fontsource/dm-sans';
import { sliderTheme } from './components/rangeSlider';

const styles = {
    fonts: {
        body: '"DM Sans", "Sora", sans-serif',
    },
    global: (props: any) => ({
        body: {
            color: mode('#F6F7F9', '#F6F7F9')(props),
            bg: mode('#0E0E0E', '#0E0E0E')(props),
            fontFamily: '"DM Sans", "Sora", sans-serif',
            
        },
    }),
};

const components = { Slider: sliderTheme };

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const colors = {
    primary: '#e29578',
};

const theme = extendTheme({ styles, colors, config, components });
export default theme;