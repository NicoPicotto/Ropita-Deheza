import React, { useContext } from 'react';
import { Stack, Heading } from '@chakra-ui/react';

const HomeView = () => {

	return (
		<Stack bgColor='fondo' h='100vh'>
			<Heading color='primero' p={5}>
				Body
			</Heading>
		</Stack>
	);
};

export default HomeView;
