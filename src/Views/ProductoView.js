import React from 'react';
import { Stack } from '@chakra-ui/react';
import Detalle from '../Components/Productos/Detalle';

const ProductoView = () => {
	return (
		<Stack
			bgColor='fondo'
			justify='center'
			p={5}
			w='100vw'
			h='100vh'
			spacing={5}
			align='center'
		>
			<Detalle />
		</Stack>
	);
};

export default ProductoView;
