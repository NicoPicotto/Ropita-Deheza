import React, { useState } from 'react';
import { Stack, Image, Button, Link } from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { BsPersonFill, BsFillPlusSquareFill, BsFillBackspaceReverseFill } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';

const Navbar = () => {
	const { logout, user } = useAuth();
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
			align='space-between'
			zIndex={100}
			pos='fixed'
			top={0}
		>
			<Stack direction='row' justify='space-between' align='center'>
				<Link as={ReachLink} to='/'>
					<Image
						src='https://www.svgrepo.com/show/217771/shopping-logo.svg'
						boxSize={colorChange ? '30px' : '50px'}
						objectFit='cover'
					/>
				</Link>
				<Stack direction='row'>
					{user ? (
						<Stack direction='row'>
							<Link as={ReachLink} to={'/nuevo'} _hover={{}}>
								<Button
									leftIcon={<BsFillPlusSquareFill />}
									size='sm'
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
								>
									Agregar
								</Button>
							</Link>
							<Link as={ReachLink} to={`/${user.email}`} _hover={{}}>
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
							leftIcon={<BsFillBackspaceReverseFill />}
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
						<Link as={ReachLink} to={'/login'} _hover={{}}>
							<Button
								bgColor='segundo'
								variant={colorChange ? 'outline' : 'filled'}
								size='sm'
								color='white'
								_hover={{ bgColor: 'cuarto' }}
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
