import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import LoginComponent from '../Components/Auth/LoginComponent';

const LoginView = () => {
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
			<LoginComponent />
		</Stack>
	);
};

export default LoginView;
