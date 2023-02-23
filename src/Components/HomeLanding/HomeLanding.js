import React from 'react';
import { Stack, Heading, Highlight, Button } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import manShopping from '../../Lotties/manShopping.json';
import { Link } from 'react-scroll';
import { FaSyncAlt } from 'react-icons/fa';

const options = {
	animationData: manShopping,
	autoplay: true,
	loop: false,
	style: {
		width: '100%',
	},
};

const HomeLanding = () => {
	const { View } = useLottie(options);

	return (
		<Stack w='1000px' h='600px' direction='row'>
			<Stack w='50%' h='100%' justify='center' spacing={3}>
				<Heading color='segundo' size='xl' lineHeight='normal' fontFamily="fonts.heading" fontWeight="regular">
					<Highlight query={['vender', "regalar"]} styles={{ color: 'cuarto', fontFamily: "fonts.heading", fontWeight: "regular" }}>
						No dejes juntando tierra en tu placard lo que podés vender o regalar hoy mismo.
					</Highlight>
				</Heading>
				<Link to='vistaProductos' smooth={true}>
					<Button
						w='fit-content'
						leftIcon={<FaSyncAlt />}
						bgColor='cuarto'
						color='white'
						fontFamily="fonts.body"
						_hover={{ bgColor: 'primero' }}
					>
						Sumate a la moda circular
					</Button>
				</Link>
			</Stack>
			<Stack w='50%' h='100%' justify='center'>
				{View}
			</Stack>
		</Stack>
	);
};

export default HomeLanding;
