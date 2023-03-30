import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import LoginComponent from '../Components/Auth/LoginComponent';

const LoginView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			bgColor='fondo'
			justify={!isMobile && 'center'}
			spacing={5}
			align='center'
			h="100vh"
			paddingBottom="75px"
		>
			<LoginComponent />
		</Stack>
	);
};

export default LoginView;
