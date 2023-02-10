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
				<Heading color='segundo' size='2xl' lineHeight='normal'>
					<Highlight query={['vender hoy']} styles={{ color: 'cuarto' }}>
						No dejes juntando tierra en tu placard lo que podés vender hoy.
					</Highlight>
				</Heading>
				<Link to='vistaProductos' smooth={true}>
					<Button
						w='fit-content'
						leftIcon={<FaSyncAlt />}
						bgColor='segundo'
						color='white'
						_hover={{ bgColor: 'cuarto' }}
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
