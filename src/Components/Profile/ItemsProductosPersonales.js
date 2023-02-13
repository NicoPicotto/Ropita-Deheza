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
			shadow='sm'
		>
			<Stack w="75%" direction='row' divider={<StackDivider borderColor='cuarto' />}>
				<Text fontSize='sm' color='segundo' as='b' noOfLines={1} textOverflow="ellipsis" overflow="hidden">
					{titulo}
				</Text>
				<Text fontSize='sm' color='segundo'>
					$ {precio}
				</Text>
			</Stack>
			<Stack w="25%">
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
