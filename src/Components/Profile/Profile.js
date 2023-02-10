import React, { useState, useEffect } from 'react';
import { Stack, Heading, Divider, Spinner, useToast } from '@chakra-ui/react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';
import InputsContainer from './Inputs';

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [datosPersonales, setDatosPersonales] = useState(null);
	const toast = useToast();
	const paramsID = useParams();

	useEffect(() => {
		const getEntrada = async () => {
			const docRef = doc(firestore, 'usuarios', paramsID.id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setDatosPersonales(docSnap.data());
				setIsLoading(false);
			} else {
				console.log('Error al traer los datos del usuario');
			}
		};
		getEntrada();
	}, [paramsID]);

	//Función para actualizar los datos
	const handleUpdate = async (nuevoNombre, nuevoApellido, nuevoTelefono) => {
		const entradaRef = doc(firestore, 'usuarios', paramsID.id);
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
			position: 'top',
		});
	};

	return (
		<Stack w='50%' h='100%'>
			<Stack justify='space-between' borderRadius={5} p={5} as='form'>
				<Heading color='segundo' textAlign='center'>
					Tus datos
				</Heading>
				<Divider borderColor='cuarto' />
				{!isLoading ? (
					<Stack spacing={5} p={3}>
						<InputsContainer
							nombre={datosPersonales.nombre}
							apellido={datosPersonales.apellido}
							email={datosPersonales.email}
							telefono={datosPersonales.telefono}
							handleUpdate={handleUpdate}
						/>
					</Stack>
				) : (
					<Stack align='center' color='cuarto'>
						<Spinner />
					</Stack>
				)}
			</Stack>
		</Stack>
	);
};

export default Profile;
