import React, { useState } from 'react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Heading, Stack, Input, Button, Text, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const RegisterComponent = () => {
	const { registrarse } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const passwordConfirm = e.target.passwordConfirmField.value;

		if (user.password === passwordConfirm) {
			try {
				await setDoc(doc(firestore, 'usuarios', user.email), {
					nombre: '',
					apellido: '',
					telefono: '',
					email: user.email,
				});
				await registrarse(user.email, user.password);
				navigate('/');
			} catch (error) {
				setError(error.message);
			}
		}

		if (user.password !== passwordConfirm) {
			setError(true);
		}
	};

	return (
		<Stack h='900px' justify='center'>
			<Stack
				justify='space-between'
				align='center'
				w='600px'
				h='400px'
				bgColor='white'
				borderRadius={5}
				p={5}
				shadow='md'
				as='form'
				onSubmit={submitHandler}
			>
				<Heading size='lg' color='segundo'>
					Registrate
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

				<Input
					w='80%'
					id='passwordConfirmField'
					variant='flushed'
					placeholder='Repetir contraseña'
					type='password'
					focusBorderColor='cuarto'
				/>

				{error && (
					<Text color='red' fontSize='sm'>
						Las contraseñas no coinciden
					</Text>
				)}
				<Stack direction='row'>
					<Button type='submit' color='segundo'>
						Registrate
					</Button>
					<Link as={ReachLink} to='/login' _hover={{}}>
						<Button color='segundo' variant='outline'>
							¿Ya tenés cuenta? Iniciá sesión
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default RegisterComponent;
