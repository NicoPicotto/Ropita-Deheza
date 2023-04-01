import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {
	Stack,
	Spinner,
	Grid,
	useMediaQuery,
	Tooltip,
	Input,
	Icon,
} from '@chakra-ui/react';
import { firestore } from '../firebase';
import Producto from '../Components/Productos/Producto';
import HomeLanding from '../Components/HomeLanding/HomeLanding';
import ModalStart from '../Components/ModalStart/ModalStart';
import { IoMdHelpCircle } from 'react-icons/io';

const HomeView = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const abierto = localStorage.getItem('opened');
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	//Trae todos los productos de la DB
	useEffect(() => {
		setLoading(true);
		const q = query(
			collection(firestore, 'productos'),
			orderBy('fecha', 'desc')
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let mjesArray = [];
			querySnapshot.forEach((doc) => {
				mjesArray.push({ ...doc.data(), id: doc.id });
			});
			setProductos(mjesArray);
			setLoading(false);
		});

		return () => unsub();
	}, []);

	//Referenciando filtros
	const filteredItems = productos.filter((item) => {
		return (
			item.titulo.toLowerCase().includes(search.toLowerCase()) ||
			item.categoria.toLowerCase().includes(search.toLowerCase())
		);
	});

	return (
		<>
			{abierto === null && <ModalStart />}
			<Stack bgColor='fondo' align='center'>
				<HomeLanding />
				<Stack
					w='100%'
					bgColor='tercero'
					marginTop='0 !important'
					direction='row'
					justify='center'
				>
					<Stack direction='row' margin={5} w={isMobile ? '100%' : '4xl'}>
						<Input
							_focus={{ bgColor: 'white' }}
							variant='filled'
							focusBorderColor='cuarto'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder='Podés buscar por nombre o por categoría.'
						/>
						<Tooltip
							label='Categorías: Remeras, chombas, camisas, buzos, camperas, pantalones, bermudas, shorts, vestidos, ropa interior, accesorios, calzado'
							bgColor='segundo'
							color='white'
							placement='bottom'
						>
							<Stack h='100%' justify='center'>
								<Icon as={IoMdHelpCircle} color='fondo' boxSize={6} />
							</Stack>
						</Tooltip>
					</Stack>
				</Stack>
				<Stack w={isMobile ? '90%' : '4xl'} align='center' justify='center'>
					{loading && <Spinner size='lg' margin={5} color='cuarto' />}
					<Grid
						templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
						gap={5}
						w='100%'
						id='vistaProductos'
						overflow='hidden'
						marginBlock={3}
					>
						{productos &&
							filteredItems.map((prod) => (
								<Producto
									key={prod.id}
									email={prod.email}
									id={prod.id}
									titulo={prod.titulo}
									descripcion={prod.descripcion}
									fecha={prod.fecha}
									imagen={prod.imagen}
									telefono={prod.telefono}
									apellido={prod.apellido}
									talle={prod.talle}
									precio={prod.precio}
									nombre={prod.nombre}
								/>
							))}
					</Grid>
				</Stack>
			</Stack>
		</>
	);
};

export default HomeView;
