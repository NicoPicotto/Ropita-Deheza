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
	FormLabel,
	useMediaQuery,
	Select,
} from '@chakra-ui/react';
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useAuth } from '../../Context/Context';
import { BsImageFill } from 'react-icons/bs';
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
	const [categoria, setCategoria] = useState('');
	const [imageUpload, setImageUpload] = useState([]);
	const [imagenCargada, setImagenCargada] = useState(false);
	const [progress, setProgress] = useState(0);
	const [URLs, setURLs] = useState([]);
	const [imageShow, setImageShow] = useState('');
	const toast = useToast();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	//Traer los datos del usuario logeado para pasarlos al producto
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

	//Función para subir imagenes al storage
	const uploadImage = () => {
		setIsLoading(true);
		const filesArray = Array.from(imageUpload);
		const promises = [];
		filesArray.forEach((file) => {
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

	//Función para publicar el producto
	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		if (titulo && imagenCargada && descripcion && talle && precio !== '') {
			await addDoc(collection(firestore, 'productos'), {
				titulo,
				descripcion,
				imagen: URLs,
				talle,
				precio,
				categoria,
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
			setIsLoading(false);
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
			w={isMobile ? '90%' : '4xl'}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
		>
			<Stack w='100%' align='center'>
				<Heading
					size={isMobile ? 'md' : 'lg'}
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
					overflow='hidden'
				>
					Agregar producto
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack
				spacing={5}
				align='center'
				direction={isMobile ? 'column' : 'row'}
				h={isMobile ? '100%' : 'xs'}
				w='100%'
			>
				<Stack
					bgColor='fondo'
					h={isMobile ? 'xs' : '100%'}
					borderRadius={10}
					w={isMobile ? '100%' : '50%'}
					align='center'
					justify='center'
				>
					{imageShow ? (
						<Stack
							direction={isMobile ? 'column-reverse' : 'row'}
							w='100%'
							h='100%'
						>
							<Stack
								w={isMobile ? '100%' : '25%'}
								direction={isMobile ? 'row' : 'column'}
								h={isMobile && '25%'}
							>
								{URLs.map((img) => (
									<Image
										h={isMobile ? '100%' : '33%'}
										cursor='pointer'
										key={img}
										w={isMobile ? '33%' : '100%'}
										src={img}
										alt='Imagen del producto'
										objectFit='cover'
										onClick={(e) => setImageShow(img)}
									/>
								))}
							</Stack>
							<Stack w={isMobile ? '100%' : '75%'} h={isMobile && '75%'}>
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
							<FormLabel
								display='flex'
								flexDir='column'
								cursor='pointer'
								p={10}
								alignItems='center'
								justifyContent='center'
								color='gray'
							>
								<BsImageFill size='30%' />
								<Input
									type='file'
									display='none'
									id='fileInput'
									variant='unstyled'
									accept='image/png, image/jpg, image/gif, image/jpeg'
									multiple
									onChange={(e) => {
										setImageUpload(e.target.files);
									}}
								/>
								<Text fontSize='md' as='b' textAlign='center'>
									Cargar Imágenes
								</Text>
								<Text fontSize='xs' textAlign='center'>
									Máximo 3 imágenes por producto.
								</Text>
							</FormLabel>

							{imageUpload.length <= 3 && imageUpload.length > 0 && (
								<Button
									w='80%'
									onClick={uploadImage}
									bgColor='segundo'
									color='white'
									_hover={{ bgColor: 'cuarto' }}
									size={isMobile ? 'sm' : 'md'}
								>
									Subir imágenes
								</Button>
							)}
							{imageUpload.length > 3 && (
								<Text fontSize='xs' textAlign='center' color='red'>
									Máximo 3 imágenes por producto.
								</Text>
							)}
						</Stack>
					)}
				</Stack>
				<Stack h='100%' w={isMobile ? '100%' : '50%'} justify='space-between'>
					<Stack>
						<Input
							variant='outline'
							size={isMobile ? 'sm' : 'md'}
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
							size={isMobile ? 'sm' : 'md'}
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
							variant='outline'
							placeholder='Descripción del producto. Ej: Color, tamaño, estado, detalles, etc.'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
					<Stack direction='row'>
						<Select
							variant='outline'
							value={categoria}
							size={isMobile ? 'sm' : 'md'}
							onChange={(e) => setCategoria(e.target.value)}
							w='40%'
							focusBorderColor='cuarto'
							placeholder='Categoría'
							isRequired
						>
							<option value='Remeras'>Remeras</option>
							<option value='Chombas'>Chombas</option>
							<option value='Camisas'>Camisas</option>
							<option value='Buzos'>Buzos</option>
							<option value='Camperas'>Camperas</option>
							<option value='Pantalones'>Pantalones</option>
							<option value='Bermudas'>Bermudas</option>
							<option value='Shorts<'>Shorts</option>
							<option value='Vestidos'>Vestidos</option>
							<option value='Accesorios'>Accesorios</option>
							<option value='Calzado'>Calzado</option>
						</Select>
						<Tooltip
							label='Si lo que estás publicando no tiene talle, colocale "Talle único". Ej: Una gorra.'
							bgColor='tercero'
							color='white'
							placement={isMobile ? 'top' : 'left'}
						>
							<Input
								variant='outline'
								value={talle}
								size={isMobile ? 'sm' : 'md'}
								onChange={(e) => setTalle(e.target.value)}
								w='30%'
								focusBorderColor='cuarto'
								placeholder='Talle'
								isRequired
							></Input>
						</Tooltip>
						<Tooltip
							label='Recordá que si tu intención es regalarlo, podés ponerle $0'
							bgColor='tercero'
							color='white'
							placement={isMobile ? 'top' : 'right'}
						>
							<Input
								variant='outline'
								placeholder='$0'
								size={isMobile ? 'sm' : 'md'}
								value={precio}
								onChange={(e) => setPrecio(e.target.value)}
								w='30%'
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
							placement={isMobile ? 'top' : 'right'}
						>
							<Button
								bgColor='segundo'
								type='submit'
								color='white'
								_hover={{ bgColor: 'cuarto' }}
							>
								{isLoading ? <Spinner color='white' /> : 'Publicar producto'}
							</Button>
						</Tooltip>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default NuevoProducto;
