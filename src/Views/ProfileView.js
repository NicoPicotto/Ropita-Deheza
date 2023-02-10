import React from 'react';
import { Stack, StackDivider } from '@chakra-ui/react';
import Profile from '../Components/Profile/Profile';
import ProductosPropios from '../Components/Profile/ProductosPropios';

const ProfileView = () => {
	return (
		<Stack bgColor='fondo' h='100vh' align='center' justify='center'>
			<Stack
				bgColor='white'
				h='400px'
				w='60vw'
				divider={<StackDivider />}
				direction='row'
			>
				<Profile />
				<ProductosPropios />
			</Stack>
		</Stack>
	);
};

export default ProfileView;
