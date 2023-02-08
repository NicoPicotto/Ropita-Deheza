import React from 'react';
import {
	Stack,
	Image,
	Input,
	Button,
	StackDivider,
	Link,
} from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';

const Navbar = () => {
	const { search, setSearch, logout, user } = useAuth();

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log('Logout');
		}
	};

	return (
		<Stack
			w='100vw'
			justify='center'
			align='space-between'
			p={7}
			zIndex={100}
			pos='fixed'
			top={0}
		>
			<Stack direction='row' justify='space-between' align='center'>
				<Link as={ReachLink} to='/'>
					<Image
						src='https://www.svgrepo.com/show/217771/shopping-logo.svg'
						boxSize='50px'
						objectFit='cover'
					/>
				</Link>
				<Stack direction='row'>
					{user ? (
						<Stack direction='row'>
							<Link as={ReachLink} to={`/${user.email}`} _hover={{}}>
								<Button
									leftIcon={<BsPersonFill />}
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'primero' }}
								>
									Perfil
								</Button>
							</Link>
							<Button
								variant='outline'
								color='segundo'
								borderColor='segundo'
								_hover={{ bgColor: 'primero', color: 'white' }}
								onClick={handleLogout}
							>
								Cerrar sesión
							</Button>
						</Stack>
					) : (
						<Link as={ReachLink} to={'/login'} _hover={{}}>
							<Button
								bgColor='segundo'
								color='white'
								_hover={{ bgColor: 'primero' }}
							>
								Iniciá sesión
							</Button>
						</Link>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Navbar;
