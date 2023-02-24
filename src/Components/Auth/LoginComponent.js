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
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const LoginComponent = () => {
	const { login, resetPassword, isLoading } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError('El mail o contraseña son incorrectas');
		}
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		if (!user.email)
			return setError('Escribí un mail para recuperar tu contraseña');
		try {
			await resetPassword(user.email);
			setError('Te enviamos un correo para resetear tu password');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<Stack
			spacing={5}
			align='center'
			bgColor='white'
			borderRadius={5}
			w='xl'
			p={5}
			shadow='md'
			as='form'
			onSubmit={submitHandler}
		>
			<Stack w='100%' align='center'>
				<Heading
					size='lg'
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
			<Stack direction='row'>
				<Button type='submit' color='tercero'>
					Iniciá sesión
				</Button>
				<Link as={ReachLink} to='/register' _hover={{}}>
					<Button color='tercero' variant='outline'>
						¿No tenés cuenta? Registrate
					</Button>
				</Link>
			</Stack>
			<Button color='tercero' variant='link' onClick={handleResetPassword}>
				¿Olvidaste tu contraseña?
			</Button>
		</Stack>
	);
};

export default LoginComponent;
