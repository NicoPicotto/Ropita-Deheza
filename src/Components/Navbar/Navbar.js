import React, { useState } from 'react';
import { Stack, Image, Button, Link } from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import { GoSignOut, GoSignIn } from 'react-icons/go';
import { Link as ReachLink } from 'react-router-dom';
import logo2 from '../../logo2.png';
const Navbar = () => {
	const { logout, user, userUid } = useAuth();
	const navigate = useNavigate();

	//Fución para cerrar la sesión.
	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log('Logout');
		}
	};

	//Función para cambiar el color cuando scrolleamos
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<Stack
			w='100vw'
			h={colorChange ? '50px' : '75px'}
			transition='0.3s'
			bgColor={colorChange ? 'segundo' : 'transparent'}
			justify='center'
			paddingX={10}
			align='center'
			zIndex={100}
			pos='fixed'
			top={0}
		>
			<Stack direction='row' justify='space-between' align='center' w="100%">
				<Link as={ReachLink} to='/'>
					<Image
						src={logo2}
						w={colorChange ? '150px' : '200px'}
						objectFit='contain'
					/>
				</Link>
				<Stack direction='row'>
					{user ? (
						<Stack direction='row'>
							<Link as={ReachLink} to={'/nuevo'} _hover={{}}>
								<Button
									leftIcon={<FaTshirt />}
									size='sm'
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
								>
									Agregar
								</Button>
							</Link>
							<Link as={ReachLink} to={`/${userUid}`} _hover={{}}>
								<Button
									leftIcon={<BsPersonFill />}
									size='sm'
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
								>
									Perfil
								</Button>
							</Link>
							<Button
								leftIcon={<GoSignOut />}
								variant={colorChange ? 'filled' : 'outline'}
								size='sm'
								color={colorChange ? 'white' : 'segundo'}
								borderColor='segundo'
								_hover={{
									bgColor: 'cuarto',
									color: 'white',
									borderColor: 'cuarto',
								}}
								onClick={handleLogout}
							>
								Cerrar sesión
							</Button>
						</Stack>
					) : (
						<>
							<Link as={ReachLink} to={'/login'} _hover={{}}>
								<Button
									bgColor='segundo'
									variant={colorChange ? 'outline' : 'filled'}
									size='sm'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
									leftIcon={<GoSignIn />}
								>
									Iniciá sesión
								</Button>
							</Link>
							<Link as={ReachLink} to={'/register'} _hover={{}}>
								<Button
									bgColor='segundo'
									variant={colorChange ? 'outline' : 'filled'}
									size='sm'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
									leftIcon={<MdAssignment />}
								>
									Registrate
								</Button>
							</Link>
						</>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Navbar;
