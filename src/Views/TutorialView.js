import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import TutorialComponent from '../Components/Tutorial/TutorialComponent';

const TutorialView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			h={!isMobile && '100vh'}
			align='center'
			justify='center'
			paddingBottom="75px"
		>
			<TutorialComponent />
		</Stack>
	);
};

export default TutorialView;
