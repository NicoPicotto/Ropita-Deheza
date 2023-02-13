import React from 'react';
import { Stack } from '@chakra-ui/react';
import RegisterComponent from '../Components/Auth/RegisterComponent';

const RegisterView = () => {
	return (
		<Stack bgColor='fondo' h='100vh' align='center' justify="center">
			<RegisterComponent />
		</Stack>
	);
};

export default RegisterView;
