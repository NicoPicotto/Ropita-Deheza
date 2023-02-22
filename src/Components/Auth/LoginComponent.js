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
	const { login, resetPassword } = useAuth();
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
				<Heading size='lg' color='segundo'>
					Iniciá sesión
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack align='center' w='100%' spacing={5}>
				<Input
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					variant='outline'
					placeholder='Correo electrónico'
					type='email'
					focusBorderColor='cuarto'
					isRequired
				/>
				<Input
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					variant='outline'
					placeholder='Contraseña'
					type='password'
					focusBorderColor='cuarto'
					isRequired
				/>
				{error && (
					<Text color='red' fontSize='sm'>
						{error}
					</Text>
				)}
			</Stack>
			<Stack direction='row'>
				<Button type='submit' color='segundo'>
					Iniciá sesión
				</Button>
				<Link as={ReachLink} to='/register' _hover={{}}>
					<Button color='segundo' variant='outline'>
						¿No tenés cuenta? Registrate
					</Button>
				</Link>
			</Stack>
			<Button color='segundo' variant='link' onClick={handleResetPassword}>
				¿Olvidaste tu contraseña?
			</Button>
		</Stack>
	);
};

export default LoginComponent;
