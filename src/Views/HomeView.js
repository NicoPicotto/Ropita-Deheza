import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Stack, Spinner, Grid, Heading } from '@chakra-ui/react';
import { firestore } from '../firebase';
import Producto from '../Components/Productos/Producto';
import HomeLanding from '../Components/HomeLanding/HomeLanding';
import ModalStart from '../Components/ModalStart/ModalStart';

const HomeView = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);
	const abierto = localStorage.getItem('opened');

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

	return (
		<>
			{abierto === null && <ModalStart />}
			<Stack bgColor='fondo' align='center' w='100vw'>
				<HomeLanding />
				<Stack w='100%' bgColor='tercero' marginTop='0 !important'>
					<Heading
						fontFamily='fonts.heading'
						color='fondo'
						fontWeight='regular'
						p={3}
						size='md'
						textAlign='center'
					>
						Productos destacados
					</Heading>
				</Stack>
				<Stack w='4xl' align="center">
				{loading && <Spinner size='lg' margin={5} color='cuarto' />}
					<Grid
						templateColumns='repeat(3, 1fr)'
						gap={5}
						id='vistaProductos'
						overflow='hidden'
						p={5}
					>
						{productos.map((prod) => (
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
