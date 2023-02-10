import React, { useState } from 'react';
import { Input, Stack, Button } from '@chakra-ui/react';

const InputsContainer = ({
	nombre,
	apellido,
	telefono,
	email,
	handleUpdate,
}) => {
	const [nuevoNombre, setNuevoNombre] = useState(nombre);
	const [nuevoApellido, setNuevoApellido] = useState(apellido);
	const [nuevoTelefono, setNuevoTelefono] = useState(telefono);

	return (
		<Stack spacing={5}>
			<Stack direction='row'>
				<Input
				w='50%'
					value={nuevoNombre}
					variant='flushed'
					placeholder='Nombre'
					onChange={(e) => setNuevoNombre(e.target.value)}
					type='fname'
					focusBorderColor='cuarto'
				/>
				<Input
				w='50%'
					value={nuevoApellido}
					variant='flushed'
					placeholder='Apellido'
					onChange={(e) => setNuevoApellido(e.target.value)}
					type='lname'
					focusBorderColor='cuarto'
				/>
			</Stack>
			<Stack w='100%' direction='row'>
				<Input
					w='50%'
					value={nuevoTelefono}
					variant='flushed'
					placeholder='Telefono'
					onChange={(e) => setNuevoTelefono(e.target.value)}
					type='phone'
					focusBorderColor='cuarto'
				/>
				<Input w='50%' value={email} variant='flushed' isDisabled />
			</Stack>
			<Button
				color='white'
				bgColor='segundo'
				_hover={{ bgColor: 'cuarto' }}
				onClick={() => handleUpdate(nuevoNombre, nuevoApellido, nuevoTelefono)}
			>
				Actualizar Datos
			</Button>
		</Stack>
	);
};

export default InputsContainer;
