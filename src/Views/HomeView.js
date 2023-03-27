import React, { useEffect, useState, useRef } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {
	Stack,
	Spinner,
	Grid,
	Heading,
	useMediaQuery,
	Select,
	Button,
} from '@chakra-ui/react';
import { firestore } from '../firebase';
import Producto from '../Components/Productos/Producto';
import HomeLanding from '../Components/HomeLanding/HomeLanding';
import ModalStart from '../Components/ModalStart/ModalStart';

const HomeView = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filtroCategoria, setFiltroCategoria] = useState('');
	const abierto = localStorage.getItem('opened');
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

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
	const categoriaRef = useRef();

	return (
		<>
			{abierto === null && <ModalStart />}
			<Stack bgColor='fondo' align='center' w='100vw'>
				<HomeLanding />
				<Stack
					w='100%'
					bgColor='tercero'
					marginTop='0 !important'
					direction='row'
					justify='center'
				>
					<Stack direction='row' align='center' margin={5}>
						<Select
							bgColor='white'
							placeholder='Categoría'
							ref={categoriaRef}
							w='fit-content'
							onChange={(e) => setFiltroCategoria(e.target.value)}
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
					</Stack>
				</Stack>
				<Stack w={isMobile ? '90%' : '4xl'} align='center' direction='row'>
					{loading && <Spinner size='lg' margin={5} color='cuarto' />}
					<Grid
						templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
						gap={5}
						id='vistaProductos'
						overflow='hidden'
						marginBlock={3}
					>
						{productos &&
							productos.map((prod) => {
								if (filtroCategoria === '') {
									return (
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
									);
								}
								if (prod.categoria.includes(filtroCategoria)) {
									return (
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
									);
								} else {
									return;
								}
							})}
					</Grid>
				</Stack>
			</Stack>
		</>
	);
};

export default HomeView;
