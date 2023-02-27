import React from 'react';
import { Stack } from '@chakra-ui/react';
import RegisterComponent from '../Components/Auth/RegisterComponent';

const RegisterView = () => {

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
