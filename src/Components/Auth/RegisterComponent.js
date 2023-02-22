import React, { useState } from 'react';
import { useAuth } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import {
	Heading,
	Stack,
	Input,
	Button,
	Text,
	Link,
	Divider,
	useToast
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const RegisterComponent = () => {
	//Lleva el auth al context
	const { registrarse } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	//Estados de los inputs
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [telefono, setTelefono] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const toast = useToast()

	const submitHandler = async (e) => {
		e.preventDefault();
		const passwordConfirm = e.target.passwordConfirmField.value;

		if (user.password === passwordConfirm) {
			try {
				await setDoc(doc(firestore, 'usuarios', user.email), {
					nombre: nombre,
					apellido: apellido,
					telefono: '+549' + telefono,
					email: user.email,
				});
				await registrarse(user.email, user.password);
				toast({
					title: '¡Cuenta creada con éxito! 😎',
					status: 'success',
					duration: 7000,
					isClosable: true,
					variant: 'top-accent',
					position: 'top',
				});
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
			<Stack align='center' w='100%'>
				<Heading size='lg' color='segundo'>
					Registrate
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack spacing={5} align='center' w='100%'>
				<Stack direction='row' align='center' w='100%'>
					<Input
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						variant='outline'
						placeholder='Correo electrónico'
						type='email'
						focusBorderColor='cuarto'
						isRequired
					/>
					<Input
						onChange={(e) => setTelefono(e.target.value)}
						variant='outline'
						placeholder='Teléfono (Ej 3584245120)'
						type='phone'
						focusBorderColor='cuarto'
						isRequired
					/>
				</Stack>
				<Stack direction='row' align='center' w='100%'>
					<Input
						onChange={(e) => setNombre(e.target.value)}
						variant='outline'
						placeholder='Nombre'
						type='name'
						focusBorderColor='cuarto'
						isRequired
					/>
					<Input
						onChange={(e) => setApellido(e.target.value)}
						variant='outline'
						placeholder='Apellido'
						type='lname'
						focusBorderColor='cuarto'
						isRequired
					/>
				</Stack>

				<Stack direction='row' align='center' w='100%'>
					<Input
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						variant='outline'
						placeholder='Contraseña'
						type='password'
						focusBorderColor='cuarto'
						isRequired
					/>
					<Input
						id='passwordConfirmField'
						variant='outline'
						placeholder='Repetir contraseña'
						type='password'
						focusBorderColor='cuarto'
						isRequired
					/>
				</Stack>
				{error && (
					<Text color='red' fontSize='sm'>
						Las contraseñas no coinciden
					</Text>
				)}
			</Stack>
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
	);
};

export default RegisterComponent;
