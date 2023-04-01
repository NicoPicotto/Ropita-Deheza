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
			p={isMobile && 5}
			align='center'
			paddingBottom='75px'
			justify={!isMobile && 'center'}
		>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				w={isMobile ? '100%' : '4xl'}
			>
				<Stack
					bgColor='white'
					divider={<StackDivider />}
					direction={isMobile ? 'column' : 'row'}
					borderRadius={5}
					p={5}
					w={isMobile ? '100%' : '50%'}
					shadow='md'
				>
					<Profile />
				</Stack>
				<Stack
					bgColor='white'
					divider={<StackDivider />}
					w={isMobile ? '100%' : '50%'}
					direction={isMobile ? 'column' : 'row'}
					borderRadius={5}
					p={5}
					shadow='md'
				>
					<ProductosPropios />
				</Stack>
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
