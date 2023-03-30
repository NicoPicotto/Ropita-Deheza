import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const ErrorPage = () => {
	return (
		<Stack bgColor='fondo' h='100vh' align='center' justify='center' spacing={5}>
			<Heading size="3xl" color='segundo'>Oops :(</Heading>
			<Text color='tercero'>La página que buscás no existe.</Text>
		</Stack>
	);
};

export default ErrorPage;
