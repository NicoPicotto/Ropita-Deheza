import React from 'react';
import { Stack, Image, Heading, Text, Button } from '@chakra-ui/react';

const Producto = ({ titulo, precio, imagen }) => {
	return (
		<Stack
			w='300px'
			bgColor='white'
			p={5}
			shadow='sm'
			spacing={4}
			borderRadius={5}
		>
			<Stack>
				<Image src={imagen} />
			</Stack>
			<Stack direction='row' justifyContent='space-between'>
				<Heading size='md'>{titulo}</Heading>
				<Text as='b' color='cuarto' w='fit-content'>
					$ {precio}
				</Text>
			</Stack>
			<Button bgColor='segundo' color='white' _hover={{ bgColor: 'primero' }}>
				Comprar
			</Button>
		</Stack>
	);
};

export default Producto;
