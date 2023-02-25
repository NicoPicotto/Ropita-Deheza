import React, { useState, useEffect } from 'react';
import {
	Heading,
	Stack,
	Input,
	Image,
	Button,
	Textarea,
	Tooltip,
	Divider,
	useToast,
	Spinner,
	Text,
} from '@chakra-ui/react';
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
} from 'firebase/firestore';
import {
	ref,
	uploadBytes,
	getDownloadURL,
	uploadBytesResumable,
} from 'firebase/storage';
import { useAuth } from '../../Context/Context';
import { firestore } from '../../firebase';
import { storage } from '../../firebase';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NuevoProducto = () => {
	const { userUid } = useAuth();
	const navigate = useNavigate();
	const [datosPersonales, setDatosPersonales] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [talle, setTalle] = useState('');
	const [precio, setPrecio] = useState('');
	const [imageUpload, setImageUpload] = useState([]);
	const [imagenCargada, setImagenCargada] = useState(false);
	const [imageError, setImageError] = useState('');
	const [progress, setProgress] = useState(0);
	const [URLs, setURLs] = useState([]);
	const [imageShow, setImageShow] = useState('');
	const toast = useToast();

	//Traer los datos del usuario logeado para pasarlos
	useEffect(() => {
		const getEntrada = async () => {
			const docRef = doc(firestore, 'usuarios', userUid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setDatosPersonales(docSnap.data());
			} else {
				console.log('Error al traer los datos del usuario');
			}
		};
		getEntrada();
	}, [userUid]);

	//Función para subir una imagen al storage
	const uploadImage = () => {
		setIsLoading(true);
		const filesArray = Array.from(imageUpload);
		const promises = [];
		filesArray.map((file) => {
			const sotrageRef = ref(storage, `productos/${file.name + v4()}`);

			const uploadTask = uploadBytesResumable(sotrageRef, file);
			promises.push(uploadTask);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const prog = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(prog);
				},
				(error) => console.log(error),
				async () => {
					await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
						setURLs((prevState) => [...prevState, downloadURLs]);
						setImageShow(downloadURLs);
					});
				}
			);
		});
		Promise.all(promises).then((err) => console.log(err));
		setImagenCargada(true);
		setIsLoading(false);
	};

	const throwError = () => {
		setImageError('Se pueden cargar un máximo de 3 imágenes.');
	};

	//Función para publicar el producto
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (titulo && imagenCargada && descripcion && talle && precio !== '') {
			await addDoc(collection(firestore, 'productos'), {
				titulo,
				descripcion,
				imagen: URLs,
				talle,
				precio,
				uid: userUid,
				nombre: datosPersonales.nombre,
				apellido: datosPersonales.apellido,
				telefono: datosPersonales.telefono,
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
			w='4xl'
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
		>
			<Stack w='100%' align='center'>
				<Heading
					size='lg'
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					Agregar producto
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack spacing={5} align='center' direction='row' h='xs' w='100%'>
				<Stack
					bgColor='fondo'
					h='100%'
					borderRadius={10}
					w='50%'
					align='center'
					justify='center'
				>
					{isLoading && <Spinner color='cuarto' />}
					{imageShow ? (
						<Stack direction='row' w='100%' h='100%'>
							<Stack w='25%'>
								{URLs.map((img) => (
									<Image
										h='33%'
										key={img}
										w='100%'
										src={img}
										alt='Imagen del producto'
										objectFit='cover'
										onClick={(e) => setImageShow(img)}
									/>
								))}
							</Stack>
							<Stack>
								<Image
									h='100%'
									w='100%'
									src={imageShow}
									alt='Imagen del producto'
									objectFit='cover'
								/>
							</Stack>
						</Stack>
					) : (
						<Stack w='100%' h='100%' align='center' justify='center'>
							<Input
								type='file'
								h='100%'
								w='100%'
								bgColor='red'
								variant='unstyled'
								accept='image/png, image/jpg, image/gif, image/jpeg'
								multiple
								onChange={(e) => {
									setImageUpload(e.target.files);
								}}
							/>
							{imageUpload.length > 0 && (
								<Button
									w='100%'
									onClick={uploadImage}
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
								>
									Cargar imagen
								</Button>
							)}
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
							isRequired
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
							isRequired
						/>
					</Stack>
					<Stack direction='row'>
						<Tooltip
							label='Si lo que estás publicando no tiene talle, colocale "Talle único". Ej: Una gorra.'
							bgColor='tercero'
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
								isRequired
							></Input>
						</Tooltip>
						<Tooltip
							label='Recordá que si tu intención es regalarlo, podés ponerle $0'
							bgColor='tercero'
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
								isRequired
							/>
						</Tooltip>
					</Stack>
					<Stack>
						<Tooltip
							label='¡Atención! Estás a punto de publicar un producto. Esto implica que, al entrar al producto, las personas podrán ver tu nombre y número telefónico para contactarte.'
							bgColor='tercero'
							placement='right'
						>
							<Button
								bgColor='segundo'
								type='submit'
								color='white'
								_hover={{ bgColor: 'cuarto' }}
								loadingText='Publicando...'
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
