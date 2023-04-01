import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import RegisterComponent from '../Components/Auth/RegisterComponent';

const RegisterView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
		bgColor='fondo'
		justify={!isMobile && 'center'}
		align='center'
		h="100vh"
		paddingBottom={!isMobile && '75px'}
		p={isMobile && 5}
		>
			<RegisterComponent />
		</Stack>
	);
};

export default RegisterView;
