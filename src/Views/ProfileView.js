import React from 'react';
import { Stack } from '@chakra-ui/react';
import Profile from '../Components/Profile/Profile';

const ProfileView = () => {
	return (
		<Stack bgColor='fondo' h='100vh' align='center'>
			<Profile />
		</Stack>
	);
};

export default ProfileView;
