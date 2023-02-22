import React from 'react';
import { Stack, StackDivider, Link, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import Profile from '../Components/Profile/Profile';
import ProductosPropios from '../Components/Profile/ProductosPropios';
import { IoMdHelpCircle } from 'react-icons/io';

const ProfileView = () => {

	return (
		<Stack bgColor='fondo' h='100vh' align='center' justify='center'>
			<Stack
				bgColor='white'
				w='4xl'
				divider={<StackDivider />}
				direction='row'
				borderRadius={5}
				p={5}
				shadow='md'
				marginBottom={3}
			>
				<Profile />
				<ProductosPropios />
			</Stack>
			<Link as={ReachLink} to='/ayuda'>
				<Button leftIcon={<IoMdHelpCircle />} variant='link'>
					Necesito ayuda
				</Button>
			</Link>
		</Stack>
	);
};

export default ProfileView;
