import React, { useEffect, useState } from 'react';
import {
	collection,
	query,
	where,
	documentId,
	getDocs,
} from 'firebase/firestore';
import { Stack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { firestore } from '../../firebase';
import DetallesAdentro from './DetallesAdentro';

const Detalle = () => {
	const [producto, setProducto] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const paramsID = useParams();

	useEffect(() => {
		const getProductos = async () => {
			setIsLoading(true);
			const docs = [];
			const q = query(
				collection(firestore, 'productos'),
				where(documentId(), '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducto(docs);
			setIsLoading(false);
		};
		getProductos();
	}, [paramsID]);

	const handleSubmit = () => {};

	return (
		<Stack
			onSubmit={handleSubmit}
			align='center'
			w='4xl'
			marginTop={10}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
		>
			{producto.map((data, id) => (
				<DetallesAdentro
					key={id}
					descripcion={data.descripcion}
					fecha={data.fecha}
					nombre={data.nombre}
					apellido={data.apellido}
					precio={data.precio}
					talle={data.talle}
					telefono={data.telefono}
					titulo={data.titulo}
					imagen={data.imagen}
					id={id}
					handleSubmit={handleSubmit}
				/>
			))}
			{isLoading && <Spinner size='lg' margin={5} color='cuarto' />}
		</Stack>
	);
};

export default Detalle;
