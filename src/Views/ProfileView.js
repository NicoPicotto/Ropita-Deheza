import React from 'react';
import { Stack, StackDivider } from '@chakra-ui/react';
import Profile from '../Components/Profile/Profile';
import ProductosPropios from '../Components/Profile/ProductosPropios';

const ProfileView = () => {
	return (
		<Stack bgColor='fondo' h='100vh' align='center' justify='center'>
			<Stack
				bgColor='white'
				w="4xl"
				divider={<StackDivider />}
				direction='row'
				borderRadius={5}
				p={5}
				shadow='md'
			>
				<Profile />
				<ProductosPropios />
			</Stack>
		</Stack>
	);
};

export default ProfileView;
