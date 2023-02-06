import React, { useState, useEffect } from 'react';
import { Stack, Heading, Divider, Input, Button } from '@chakra-ui/react';
import { useAuth } from '../../Context/Context';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
	const { user } = useAuth();

	const [nuevoNombre, setNuevoNombre] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		const getData = async () => {
			const displayName = await user.displayName;
			const email = await user.email;
			setNuevoNombre(displayName);
			setEmail(email);
		};
		getData();
	}, [user]);

	const handleUpdate = () => {
		updateProfile(user, {
			displayName: nuevoNombre,
		})
			.then(() => {
				console.log('Datos actulizados!');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Stack
			justify='space-between'
			w='600px'
			marginTop='50px'
			bgColor='white'
			borderRadius={5}
			spacing={5}
			p={5}
			shadow='md'
			as='form'
		>
			<Heading color='segundo'>Tus datos</Heading>
			<Divider borderColor='cuarto' />
			<Input
				value={nuevoNombre !== null ? nuevoNombre : 'Ingresá tu nombre completo'}
				onChange={(e) => setNuevoNombre(e.target.value)}
			/>
			<Input isDisabled value={email} />
			<Button color='segundo' onClick={handleUpdate}>
				Actualizar Datos
			</Button>
		</Stack>
	);
};

export default Profile;
