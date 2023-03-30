import React, { useState } from 'react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import {
	Heading,
	Stack,
	Input,
	Button,
	Divider,
	Text,
	Link,
	useMediaQuery,
	Spinner
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const LoginComponent = () => {
	const { login, resetPassword } = useAuth();
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		try {
			await login(user.email, user.password);
			setIsLoading(false)
			navigate('/');
		} catch (error) {
			setIsLoading(false)
			setError('El mail o contraseña son incorrectas');
		}
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		if (!user.email)
			return setError('Escribí un mail para recuperar tu contraseña.');
		try {
			await resetPassword(user.email);
			setError('Te enviamos un correo para resetear tu password.');
		} catch (error) {
			setError('Email inválido.');
		}
	};

	return (
		<Stack
			align='center'
			w={isMobile ? '90%' : 'xl'}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
			spacing={5}
			onSubmit={submitHandler}
		>
			<Stack w='100%' align='center'>
				<Heading
					size={isMobile ? 'md' : 'lg'}
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					Iniciá sesión
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack align='center' w='100%' spacing={5}>
				<Stack w='100%' spacing={5}>
					<Stack>
						<Text margin={0} fontSize='sm' color='tercero' as='b'>
							Correo electrónico
						</Text>
						<Input
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							variant='outline'
							placeholder='juanperez@gmail.com'
							type='email'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
					<Stack>
						<Text margin={0} fontSize='sm' color='tercero' as='b'>
							Contraseña
						</Text>
						<Input
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							variant='outline'
							placeholder='*********'
							type='password'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
				</Stack>

				{error && (
					<Text color='red' fontSize='sm'>
						{error}
					</Text>
				)}
			</Stack>
			<Stack direction={isMobile ? 'column' : 'row'} w={isMobile && '100%'}>
				<Button
					type='submit'
					color='white'
					bgColor='segundo'
					_hover={{ bgColor: 'cuarto' }}
				>
					{isLoading ? <Spinner color="white"/> : "Iniciá sesión"}
					
				</Button>
				<Link as={ReachLink} to='/register' _hover={{}}>
					<Button
						color='segundo'
						w={isMobile && '100%'}
						variant='outline'
						borderColor='segundo'
						_hover={{
							bgColor: 'cuarto',
							borderColor: 'transparent',
							color: 'white',
						}}
					>
						¿No tenés cuenta? Registrate
					</Button>
				</Link>
			</Stack>
			<Button variant='link' onClick={handleResetPassword}>
				¿Olvidaste tu contraseña?
			</Button>
		</Stack>
	);
};

export default LoginComponent;
