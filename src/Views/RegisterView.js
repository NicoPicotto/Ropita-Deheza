import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import RegisterComponent from '../Components/Auth/RegisterComponent';

const RegisterView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack bgColor='fondo'
		justify='center'
		p={5}
		w='100vw'
		spacing={5}
		align='center'
		h='100vh'>
			<RegisterComponent />
		</Stack>
	);
};

export default RegisterView;
