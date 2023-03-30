import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Detalle from '../Components/Productos/Detalle';

const ProductoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			justify='center'
			h={!isMobile && "100vh"}
			spacing={5}
			align='center'
			paddingBottom="75px"
		>
			<Detalle />
		</Stack>
	);
};

export default ProductoView;
