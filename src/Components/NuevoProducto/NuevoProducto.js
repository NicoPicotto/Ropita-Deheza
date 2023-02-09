import React from 'react';
import { Heading, Stack, Input, Button, Text, Tooltip } from '@chakra-ui/react';

const NuevoProducto = () => {
	return (
		<Stack h='900px' justify='center' zIndex={10}>
			<Stack
				align='center'
				w='600px'
				h='400px'
				bgColor='white'
				borderRadius={5}
				p={5}
				shadow='md'
				as='form'
			>
				<Heading size='lg' color='segundo'>
					Agregar producto
				</Heading>
				<Stack spacing={5} w='100%' justify='center' align='center'>
					<Input
						w='80%'
						variant='flushed'
						placeholder='Correo electrónico'
						type='email'
						focusBorderColor='cuarto'
					/>
					<Input
						w='80%'
						variant='flushed'
						placeholder='Contraseña'
						type='password'
						focusBorderColor='cuarto'
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default NuevoProducto;
