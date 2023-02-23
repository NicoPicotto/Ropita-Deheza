import { extendTheme } from '@chakra-ui/react';

const colors = {
	primero: '#66F250',
	segundo: '#8A7DD8',
	tercero: '#262626',
	cuarto: '#5FD95B',
	fondo: '#F2F2F2',
};

const fonts = {
	fonts: {
		body: `'Montserrat', sans-serif`,
		heading: `'Titan One', cursive`,
	},
};

const theme = extendTheme({ colors, fonts });

export default theme;
