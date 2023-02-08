import React, { useState } from 'react';
import { Input, Stack, Button } from '@chakra-ui/react';

const InputsContainer = ({ nombre, apellido, telefono, email, handleUpdate }) => {
	const [nuevoNombre, setNuevoNombre] = useState(nombre);
	const [nuevoApellido, setNuevoApellido] = useState(apellido);
	const [nuevoTelefono, setNuevoTelefono] = useState(telefono);

	return (
		<Stack spacing={5}>
			<Input
				value={nuevoNombre}
				variant='flushed'
				placeholder='Nombre'
				onChange={(e) => setNuevoNombre(e.target.value)}
				type='fname'
				focusBorderColor='cuarto'
			/>
			<Input
				value={nuevoApellido}
				variant='flushed'
				placeholder="Apellido"
                onChange={(e) => setNuevoApellido(e.target.value)}
				type='lname'
				focusBorderColor='cuarto'
			/>
			<Input
				value={nuevoTelefono}
				variant='flushed'
				placeholder="Telefono"
                onChange={(e) => setNuevoTelefono(e.target.value)}
				type='phone'
				focusBorderColor='cuarto'
			/>
			<Input value={email} variant='flushed' isDisabled />
			<Button color='segundo' onClick={() => handleUpdate(nuevoNombre, nuevoApellido, nuevoTelefono)}>
				Actualizar Datos
			</Button>
		</Stack>
	);
};

export default InputsContainer;
