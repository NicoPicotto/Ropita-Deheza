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
	Spinner,
} from '@chakra-ui/react';
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../../Context/Context';
import { firestore } from '../../firebase';
import { storage } from '../../firebase';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NuevoProducto = () => {
	const { email } = useAuth();
	const navigate = useNavigate();
	const [datosPersonales, setDatosPersonales] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [talle, setTalle] = useState('');
	const [precio, setPrecio] = useState('');
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList, setImageList] = useState([]);
	const [imagenCargada, setImagenCargada] = useState(false);
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

	//Función para subir una imagen al storage
	const uploadImage = () => {
		setIsLoading(true);
		if (imageUpload == null) return;
		const imageRef = ref(storage, `productos/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageList((prev) => [...prev, url]);
				setImagenCargada(true);
				setIsLoading(false);
			});
		});
	};

	//Función para publicar el producto
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (titulo && imagenCargada && descripcion && talle && precio !== '') {
			await addDoc(collection(firestore, 'productos'), {
				titulo,
				descripcion,
				imagen: imageList,
				talle,
				precio,
				email: datosPersonales.email,
				nombre: datosPersonales.nombre,
				apellido: datosPersonales.apellido,
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
				position: 'top',
			});
			navigate('/');
		} else {
			toast({
				title: 'Tenés campos sin completar.',
				status: 'error',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
				position: 'top',
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
			<Stack spacing={5} align='center' direction='row' h='350px' w='100%'>
				<Stack
					bgColor='fondo'
					p={5}
					h='100%'
					borderRadius={10}
					w='50%'
					align='center'
					justify='center'
				>
					{isLoading && <Spinner color='cuarto' />}
					{imagenCargada ? (
						<Image
							h='100%'
							w='100%'
							src={imageList}
							alt='Imagen del producto'
							objectFit='cover'
						/>
					) : (
						<Stack w='100%' h='100%' align='center' justify='center'>
							<Input
								type='file'
								variant='unstyled'
								multiple
								onChange={(e) => {
									setImageUpload(e.target.files[0]);
								}}
							/>
							<Button
								w='100%'
								onClick={uploadImage}
								bgColor='cuarto'
								color='white'
							>
								Cargar imagen
							</Button>
						</Stack>
					)}
				</Stack>
				<Stack h='100%' w='50%' justify='space-between'>
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
							<Input
								variant='outline'
								value={talle}
								onChange={(e) => setTalle(e.target.value)}
								w='50%'
								focusBorderColor='cuarto'
								placeholder='Talle'
							>
							</Input>
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
