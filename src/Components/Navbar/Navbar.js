import React, { useState, useEffect } from 'react';
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
import { Search2Icon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';

const Navbar = () => {
	const { search, setSearch, logout, user } = useAuth();
	const [id, setId] = useState('');
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log('Logout');
		}
	};

	useEffect(() => {
		const getID = async () => {
			const idCapturado = await user.email;
			setId(idCapturado);
		};
		getID();
	}, []);

	return (
		<Stack
			h='100px'
			bgColor='segundo'
			justify='center'
			align='center'
			zIndex={100}
			pos='sticky'
			top={0}
		>
			<Stack direction='row' w='900px' justify='space-between' align='center'>
				<Link as={ReachLink} to='/'>
					<Image
						src='https://www.svgrepo.com/show/217771/shopping-logo.svg'
						boxSize='50px'
						objectFit='cover'
					/>
				</Link>
				<Stack
					w='100%'
					divider={<StackDivider />}
					direction='row'
					bgColor='white'
					align='center'
					p={2}
					borderRadius={5}
				>
					<Input
						variant='unstyled'
						w='100%'
						placeholder='Buscá un producto...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Search2Icon color='segundo' marginX={1} />
				</Stack>
				<Stack direction='row'>
					{user ? (
						<Stack direction='row'>
							<Link as={ReachLink} to={`/${user.email}`} _hover={{}}>
								<Button leftIcon={<BsPersonFill />} colorScheme='whiteAlpha'>
									Perfil
								</Button>
							</Link>
							<Button
								variant='outline'
								colorScheme='whiteAlpha'
								onClick={handleLogout}
							>
								Cerrar sesión
							</Button>
						</Stack>
					) : (
						<Link as={ReachLink} to={'/login'} _hover={{}}>
							<Button colorScheme='whiteAlpha'>Iniciá sesión</Button>
						</Link>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Navbar;
