import React from 'react';
import {
	Stack,
	StackDivider,
	Link,
	Button,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import Profile from '../Components/Profile/Profile';
import ProductosPropios from '../Components/Profile/ProductosPropios';
import { IoMdHelpCircle } from 'react-icons/io';

const ProfileView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			h='100vh'
			align='center'
			paddingBottom="75px"
			justify={!isMobile && 'center'}
		>
			<Stack
				bgColor='white'
				w={isMobile ? '90%' : '4xl'}
				divider={<StackDivider />}
				direction={isMobile ? 'column' : 'row'}
				borderRadius={5}
				p={5}
				shadow='md'
			>
				<Profile />
				<ProductosPropios />
			</Stack>
			<Link as={ReachLink} to='/ayuda' marginBottom={isMobile && '75px'}>
				<Button leftIcon={<IoMdHelpCircle />} variant='link'>
					Necesito ayuda
				</Button>
			</Link>
		</Stack>
	);
};

export default ProfileView;
