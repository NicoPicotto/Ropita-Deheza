import React from 'react';
import { Stack, Text, Button, StackDivider } from '@chakra-ui/react';

const ItemsProductosPersonales = ({ titulo, handleDelete, precio, id }) => {
	return (
		<Stack
			direction='row'
			w='100%'
			bgColor='fondo'
			paddingY={1}
			paddingX={3}
			borderRadius={5}
			align='center'
			justify='space-between'
			shadow='sm'
		>
			<Stack direction='row' divider={<StackDivider borderColor='cuarto' />}>
				<Text fontSize='sm' color='segundo' as='b'>
					{titulo}
				</Text>
				<Text fontSize='sm' color='segundo'>
					$ {precio}
				</Text>
			</Stack>
			<Stack>
				<Button
					size='sm'
					colorScheme='red'
					variant='solid'
					onClick={() => handleDelete(id)}
				>
					Eliminar
				</Button>
			</Stack>
		</Stack>
	);
};

export default ItemsProductosPersonales;
