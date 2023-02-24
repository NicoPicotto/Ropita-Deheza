import React from 'react';
import { Stack, Heading, Highlight, Button } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import manShopping from '../../Lotties/manShopping.json';
import { Link } from 'react-scroll';
import { FaSyncAlt } from 'react-icons/fa';

const options = {
	animationData: manShopping,
	autoplay: true,
	loop: true,
	style: {
		width: '100%',
	},
};

const HomeLanding = () => {
	const { View } = useLottie(options);

	return (
		<Stack w='5xl' h='lg' direction='row' justify='center'>
			<Stack w='40%' h='100%' justify='center' spacing={5}>
				<Heading
					color='segundo'
					size='xl'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					<Highlight
						query={['vender', 'regalar']}
						styles={{
							color: 'cuarto',
							fontFamily: 'fonts.heading',
							fontWeight: 'regular',
						}}
					>
						No dejes colgado en tu placard lo que podés vender o regalar hoy.
					</Highlight>
				</Heading>
				<Link to='vistaProductos' smooth={true}>
					<Button
						w='fit-content'
						leftIcon={<FaSyncAlt />}
						bgColor='cuarto'
						color='white'
						fontFamily='fonts.body'
						_hover={{ bgColor: 'segundo' }}
					>
						Sumate a la moda circular
					</Button>
				</Link>
			</Stack>
			<Stack w='60%' h='100%' justify='center'>
				{View}
			</Stack>
		</Stack>
	);
};

export default HomeLanding;
