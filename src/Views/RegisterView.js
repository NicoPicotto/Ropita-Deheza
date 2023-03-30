import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import RegisterComponent from '../Components/Auth/RegisterComponent';

const RegisterView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			bgColor='fondo'
			justify={!isMobile && 'center'}
			spacing={5}
			align='center'
			h='100vh'
			paddingBottom="75px"
		>
			<RegisterComponent />
		</Stack>
	);
};

export default RegisterView;
