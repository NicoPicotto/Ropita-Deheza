import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Detalle from '../Components/Productos/Detalle';

const ProductoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			justify='center'
			p={5}
			w='100vw'
			h={!isMobile && "100vh"}
			spacing={5}
			align='center'
		>
			<Detalle />
		</Stack>
	);
};

export default ProductoView;
