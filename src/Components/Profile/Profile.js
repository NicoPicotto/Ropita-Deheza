import React, { useState, useEffect } from 'react';
import {
	Stack,
	Heading,
	Divider,
	Input,
	Button,
	Spinner,
	Text,
	useToast
} from '@chakra-ui/react';
import {
	collection,
	query,
	getDocs,
	where,
	documentId,
	doc,
	updateDoc,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';
import { useAuth } from '../../Context/Context';
import InputsContainer from './Inputs';

const Profile = () => {
	const { user } = useAuth();
	const [isLoading, setIsLoading] = useState(true)
	const [datosPersonales, setDatosPersonales] = useState(null);
	const toast = useToast()
	const paramsID = useParams()

	useEffect(() => {
		const getEntrada = async () => {
			const docs = [];
			const q = query(
				collection(firestore, 'usuarios'),
				where(documentId(), '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setDatosPersonales(docs);
			setIsLoading(false)
		};
		getEntrada();
	}, [paramsID]);

		//Función para actualizar los datos
		const handleUpdate = async (nuevoNombre, nuevoApellido, nuevoTelefono, id) => {
			const entradaRef = doc(firestore, "usuarios", id);
			await updateDoc(entradaRef, {
				nombre: nuevoNombre,
				apellido: nuevoApellido,
				telefono: nuevoTelefono,
			});
			toast({
				title: '¡Datos actualizados! 😎',
				status: 'success',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
			});
		};

	return (
		<Stack
			justify='space-between'
			w='600px'
			marginTop='50px'
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			as='form'
		>
			<Heading color='segundo'>Tus datos</Heading>
			<Divider borderColor='cuarto' />
			{!isLoading ? (
				<Stack spacing={5} p={3}>
					{datosPersonales.map((dato) => {
						return (
							<InputsContainer
								nombre={dato.nombre}
								apellido={dato.apellido}
								telefono={dato.telefono}
								key={dato.email}
								id={dato.id}
								handleUpdate={handleUpdate}
							/>
						);
					})}
				</Stack>
			) : (
				<Stack align='center' color='cuarto'>
					<Spinner />
				</Stack>
			)}
		</Stack>
	);
};

export default Profile;
