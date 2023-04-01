import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import HelpAccordion from '../Components/Help/HelpAccordion';

const HelpView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			h='100vh'
			align='center'
			justify={!isMobile && 'center'}
			paddingBottom={!isMobile && '75px'}
			p={isMobile && 5}
		>
			<HelpAccordion />
		</Stack>
	);
};

export default HelpView;
