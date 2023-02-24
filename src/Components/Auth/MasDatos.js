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
	Link,
	Divider,
	useToast,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const MasDatos = () => {
	//Lleva el auth al context
	const { registrarse, userUid } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	//Estados de los inputs
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [telefono, setTelefono] = useState('');
	const toast = useToast();

	const submitHandler = async (e) => {
		e.preventDefault();

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
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Stack
			spacing={5}
			align='center'
			bgColor='white'
			borderRadius={5}
			w='2xl'
			p={5}
			shadow='md'
			as='form'
			onSubmit={submitHandler}
		>
			<Stack align='center' w='100%'>
				<Heading
					size='lg'
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
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
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						variant='outline'
						placeholder='Contraseña'
						type='password'
						focusBorderColor='cuarto'
						isRequired
					/>
				</Stack>
				{userUid && (
					<>
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
								onChange={(e) => setTelefono(e.target.value)}
								variant='outline'
								placeholder='Teléfono (Ej 3584245120)'
								type='phone'
								focusBorderColor='cuarto'
								isRequired
							/>
						</Stack>
					</>
				)}
			</Stack>
			<Stack direction='row'>
				<Button type='submit' color='tercero'>
					Registrate
				</Button>
				<Link as={ReachLink} to='/login' _hover={{}}>
					<Button color='tercero' variant='outline'>
						¿Ya tenés cuenta? Iniciá sesión
					</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default MasDatos;