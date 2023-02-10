import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Stack, Spinner } from '@chakra-ui/react';
import { firestore } from '../firebase';
import Producto from '../Components/Productos/Producto';
import HomeLanding from '../Components/HomeLanding/HomeLanding';

const HomeView = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const q = query(collection(firestore, 'productos'));
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
		<Stack bgColor='fondo' align='center' p={5} w='100vw'>
			<HomeLanding />

			<Stack>
				{productos.map((prod) => (
					<Producto
						key={prod.id}
						titulo={prod.titulo}
						descripcion={prod.descripcion}
						fecha={prod.fecha}
						imagen={prod.imagen}
						telefono={prod.telefono}
						talle={prod.talle}
						precio={prod.precio}
						nombre={prod.nombre}
					/>
				))}
			</Stack>
			{loading && <Spinner size='lg' margin={5} color='cuarto' />}
		</Stack>
	);
};

export default HomeView;
