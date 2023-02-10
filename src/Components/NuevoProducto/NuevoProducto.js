import React, { useState, useEffect } from 'react';
import {
	Heading,
	Stack,
	Input,
	Image,
	Button,
	Select,
	Textarea,
	Tooltip,
	Divider,
	useToast,
} from '@chakra-ui/react';
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
} from 'firebase/firestore';
import { useAuth } from '../../Context/Context';
import { firestore } from '../../firebase';

const NuevoProducto = () => {
	const { email } = useAuth();
	const [datosPersonales, setDatosPersonales] = useState(null);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [talle, setTalle] = useState('');
	const [precio, setPrecio] = useState('');
	const [imagen, setImagen] = useState('');
	const [activo, setActivo] = useState(true);
	const toast = useToast();

	//Traer los datos del usuario logeado para pasarlos

	useEffect(() => {
		const getEntrada = async () => {
			const docRef = doc(firestore, 'usuarios', email);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setDatosPersonales(docSnap.data());
			} else {
				console.log('Error al traer los datos del usuario');
			}
		};
		getEntrada();
	}, []);

	//Función para publicar el producto
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (titulo && descripcion && talle !== '') {
			await addDoc(collection(firestore, 'productos'), {
				titulo,
				descripcion,
				imagen,
				talle,
				precio,
				nombre: datosPersonales.nombre,
				telefono: datosPersonales.telefono,
				activo,
				fecha: serverTimestamp(),
			});

			toast({
				title: '¡Producto publicado! 😎',
				status: 'success',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
			});
		} else {
			toast({
				title: '¡Ocurrió un error, reisá los campos!',
				status: 'error',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
			});
		}
	};

	return (
		<Stack
			onSubmit={handleSubmit}
			align='center'
			w='900px'
			marginTop={10}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
		>
			<Stack w='100%' align='center' marginBottom={3}>
				<Heading size='lg' color='segundo'>
					Agregar producto
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack spacing={5} align='center' direction='row' h='350px'>
				<Stack bgColor='fondo' p={5} h='100%' borderRadius={10}>
					<Image
						src='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
						alt='Imagen del producto'
					/>
					<Input type='file' variant='flushed' />
				</Stack>
				<Stack w='100%' h='100%' justify='space-between'>
					<Stack>
						<Input
							variant='outline'
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
							placeholder='Título del producto. Ej: Remera lisa.'
							focusBorderColor='cuarto'
						/>
					</Stack>
					<Stack flex={1}>
						<Textarea
							h='100%'
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
							variant='outline'
							placeholder='Descripción del producto. Ej: Color, tamaño, estado, detalles, etc.'
							focusBorderColor='cuarto'
						/>
					</Stack>
					<Stack direction='row'>
						<Tooltip
							label='Si lo que estás publicando no tiene talle, colocale "Talle único". Ej: Una gorra.'
							bgColor='cuarto'
							color='white'
							placement='left'
						>
							<Select
								variant='outline'
								value={talle}
								onChange={(e) => setTalle(e.target.value)}
								w='50%'
								focusBorderColor='cuarto'
								placeholder='Talle'
							>
								<option value='XS'>XS</option>
								<option value='S'>S</option>
								<option value='M'>M</option>
								<option value='L'>L</option>
								<option value='XL'>XL</option>
								<option value='XXL'>XXL</option>
								<option value='Talle único'>Talle único</option>
							</Select>
						</Tooltip>
						<Tooltip
							label='Recordá que si tu intención es regalarlo, podés ponerle $0'
							bgColor='cuarto'
							color='white'
							placement='right'
						>
							<Input
								variant='outline'
								placeholder='$0'
								value={precio}
								onChange={(e) => setPrecio(e.target.value)}
								w='50%'
								focusBorderColor='cuarto'
								type='number'
							/>
						</Tooltip>
					</Stack>
					<Stack>
						<Tooltip
							label='¡Atención! Estás a punto de publicar un producto. Esto implica que, al entrar al producto, las personas podrán ver tu nombre y número telefónico para contactarte.'
							bgColor='segundo'
							placement='right'
						>
							<Button
								bgColor='segundo'
								type='submit'
								color='white'
								_hover={{ bgColor: 'cuarto' }}
							>
								Publicar producto
							</Button>
						</Tooltip>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default NuevoProducto;
