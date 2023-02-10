import React, { useState, useEffect } from 'react';
import { Stack, Heading, Divider, useToast } from '@chakra-ui/react';
import {
	query,
	doc,
	deleteDoc,
	where,
	getDocs,
	collection,
} from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase';
import ItemsProductosPersonales from './ItemsProductosPersonales';

const ProductosPropios = () => {
	const [productosPersonales, setProductosPersonales] = useState([]);
	const paramsID = useParams();
	const toast = useToast();
	const navigate = useNavigate();

	useEffect(() => {
		const getProductos = async () => {
			const docs = [];
			const q = query(
				collection(firestore, 'productos'),
				where('email', '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProductosPersonales(docs);
		};
		getProductos();
	}, [paramsID]);

	const handleDelete = async (id) => {
		await deleteDoc(doc(firestore, 'productos', id));

		toast({
			title: '¡Producto eliminado!',
			status: 'error',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
			position: 'top',
		});

		navigate('/');
	};

	return (
		<Stack w='50%' h='100%'>
			<Stack justify='space-between' borderRadius={5} p={5} as='form'>
				<Heading color='segundo' textAlign='center'>
					Tus productos
				</Heading>
				<Divider borderColor='cuarto' />
				{productosPersonales !== [] ? (
					productosPersonales.map((prod) => (
						<ItemsProductosPersonales
							key={prod.id}
							titulo={prod.titulo}
							precio={prod.precio}
							id={prod.id}
							handleDelete={handleDelete}
						/>
					))
				) : (
					<Stack w='100%' align='center' justify='center'>
						<Heading size='md' textAlign='center' color='cuarto'>
							Aún no tenés productos agregados.
						</Heading>
					</Stack>
				)}
			</Stack>
		</Stack>
	);
};

export default ProductosPropios;
