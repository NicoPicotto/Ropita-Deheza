import React, { useContext } from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import { RopitaContext } from '../Context/Context';

const ProfileView = () => {

    const [usuario] = useContext(RopitaContext);

	return (
		<Stack bgColor='fondo' h='100vh'>
			<Heading color='primero' p={5}>
				Profile
			</Heading>
		</Stack>
	);
};

export default ProfileView;
