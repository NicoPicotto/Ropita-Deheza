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
	Spinner,
	Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const RegisterComponent = () => {
	//Lleva el auth al context
	const { registrarse, userUid, email } = useAuth();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	//Estados de los inputs
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [telefono, setTelefono] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await registrarse(user.email, user.password);
		} catch (error) {
			console.log(error.message);
		}
		setIsLoading(false);
	};

	const submitData = async (nombre, apellido, telefono, email) => {
		try {
			setIsLoading(true);
			await setDoc(doc(firestore, 'usuarios', userUid), {
				nombre: nombre,
				apellido: apellido,
				telefono: '+549' + telefono,
				email: email,
			});
			toast({
				title: `¡Bienvenidx ${nombre}! 😎`,
				status: 'success',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
				position: 'top',
			});
			navigate('/');
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
			w='xl'
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
					{userUid ? 'Completá tus datos' : 'Registrate'}
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack spacing={5} align='center' w='100%'>
				{!userUid && (
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
							<Text fontSize='sm' color='tercero' as='b'>
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
				)}

				{userUid && (
					<>
						<Stack w='100%' spacing={5}>
							<Stack>
								<Text margin={0} fontSize='sm' color='tercero' as='b'>
									Nombre
								</Text>
								<Input
									onChange={(e) => setNombre(e.target.value)}
									variant='outline'
									placeholder='Juan'
									type='name'
									focusBorderColor='cuarto'
									isRequired
								/>
							</Stack>
							<Stack>
								<Text margin={0} fontSize='sm' color='tercero' as='b'>
									Apellido
								</Text>
								<Input
									onChange={(e) => setApellido(e.target.value)}
									variant='outline'
									placeholder='Perez'
									type='lname'
									focusBorderColor='cuarto'
									isRequired
								/>
							</Stack>
							<Stack>
								<Text margin={0} fontSize='sm' color='tercero' as='b'>
									Teléfono (Whatsapp)
								</Text>
								<Input
									onChange={(e) => setTelefono(e.target.value)}
									variant='outline'
									placeholder='3584100200'
									type='phone'
									focusBorderColor='cuarto'
									isRequired
								/>
							</Stack>
						</Stack>

						<Stack direction='row'>
							<Button
								onClick={() => submitData(nombre, apellido, telefono, email)}
								color='tercero'
							>
								Completá tus datos
							</Button>
						</Stack>
					</>
				)}
			</Stack>
			{!userUid && (
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
			)}

			{isLoading && <Spinner color='cuarto' />}
		</Stack>
	);
};

export default RegisterComponent;
