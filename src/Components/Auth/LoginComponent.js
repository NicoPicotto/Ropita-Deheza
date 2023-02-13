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
				justify='space-between'
				align='center'
				boxSize="md"
				bgColor='white'
				borderRadius={5}
				p={5}
				shadow='md'
				as='form'
				onSubmit={submitHandler}
			>
				<Stack w='80%' align='center'>
					<Heading size='lg' color='segundo'>
						Iniciá sesión
					</Heading>
					<Divider borderColor='cuarto' />
				</Stack>
				<Input
					w='80%'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					variant='flushed'
					placeholder='Correo electrónico'
					type='email'
					focusBorderColor='cuarto'
				/>
				<Input
					w='80%'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					variant='flushed'
					placeholder='Contraseña'
					type='password'
					focusBorderColor='cuarto'
				/>
				{error && (
					<Text color='red' fontSize='sm'>
						{error}
					</Text>
				)}
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
