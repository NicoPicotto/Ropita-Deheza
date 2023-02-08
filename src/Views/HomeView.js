import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Stack, Spinner } from '@chakra-ui/react';
import { firestore } from '../firebase';
import Producto from '../Components/Productos/Producto';

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
		<Stack bgColor='fondo' h='900px' align='center' p={5}>
			{productos.map((prod) => (
				<Producto
					key={prod.id}
					titulo={prod.titulo}
					descripcion={prod.descripcion}
					precio={prod.precio}
					imagen={prod.imagen}
				/>
			))}
			{loading && <Spinner margin={5} color='color.primario' />}
		</Stack>
	);
};

export default HomeView;
