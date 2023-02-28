import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import LoginComponent from '../Components/Auth/LoginComponent';

const LoginView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			bgColor='fondo'
			justify={!isMobile && 'center'}
			p={5}
			w='100vw'
			spacing={5}
			align='center'
			h='100vh'
		>
			<LoginComponent />
		</Stack>
	);
};

export default LoginView;
