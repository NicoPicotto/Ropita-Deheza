import React, { useContext, useState } from 'react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { Heading, Stack, Input, Button, Text, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const LoginComponent = () => {
	const { login } = useAuth();
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
			setError(error.message);
		}
	};

	return (
		<Stack
			justify='space-between'
			align='center'
			w='600px'
			h='300px'
			marginTop='100px'
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			as='form'
			onSubmit={submitHandler}
		>
			<Heading size='lg' color='segundo'>
				Iniciá sesión
			</Heading>
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

			<Stack direction='row'>
				<Button type='submit' color='segundo'>
					Iniciá sesión
				</Button>
				<Link as={ReachLink} to='/register'>
					<Button color='segundo' variant='outline'>
						¿No tenés cuenta? Registrate
					</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default LoginComponent;
