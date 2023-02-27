import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import HelpAccordion from '../Components/Help/HelpAccordion';

const HelpView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			h={!isMobile && '100vh'}
			align='center'
			justify='center'
		>
			<HelpAccordion />
		</Stack>
	);
};

export default HelpView;
