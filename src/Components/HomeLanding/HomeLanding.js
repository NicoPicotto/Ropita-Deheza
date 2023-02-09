import React from 'react';
import { Stack, Heading, Highlight } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import manShopping from '../../Lotties/manShopping.json';

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
			<Stack w='50%' h='100%' justify='center'>
				<Heading
					color='segundo'
					size='2xl'
					lineHeight='normal'
					textAlign='right'
				>
					<Highlight query={['vender hoy']} styles={{ color: 'cuarto' }}>
						No dejes juntando tierra en tu placard lo que podés vender hoy.
					</Highlight>
				</Heading>
			</Stack>
			<Stack w='50%' h='100%' justify='center'>
				{View}
			</Stack>
		</Stack>
	);
};

export default HomeLanding;
