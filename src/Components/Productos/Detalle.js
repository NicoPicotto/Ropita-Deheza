import React, { useEffect, useState } from 'react';
import {
	collection,
	query,
	where,
	documentId,
	getDocs,
} from 'firebase/firestore';
import { Stack } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { firestore } from '../../firebase';
import DetallesAdentro from './DetallesAdentro';

const Detalle = () => {
	const [producto, setProducto] = useState([]);
	const paramsID = useParams();

	useEffect(() => {
		const getProductos = async () => {
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
		};
		getProductos();
	}, [paramsID]);


	const handleSubmit = () => {};

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
		</Stack>
	);
};

export default Detalle;