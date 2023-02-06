import React, { useContext } from 'react';
import {
	Stack,
	Image,
	Input,
	Button,
	StackDivider,
	Link,
} from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { BsPersonFill } from 'react-icons/bs';
import { Search2Icon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import {  signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = () => {
	const {user, search, setSearch} = useAuth()

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
							<Link as={ReachLink} to={'/perfil'} _hover={{}}>
								<Button leftIcon={<BsPersonFill />} colorScheme='whiteAlpha'>
									Perfil
								</Button>
							</Link>
							<Button
								variant='outline'
								colorScheme='whiteAlpha'
								onClick={() => signOut(auth)}
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
