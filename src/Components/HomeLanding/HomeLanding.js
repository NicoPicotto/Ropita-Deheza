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
		<Stack w='100%' h='lg' justify='center' align='center' bgColor='segundo'>
			<Stack w='4xl' direction='row'>
				<Stack w='45%' h='100%' justify='center' spacing={5}>
					<Heading
						color='fondo'
						size='lg'
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
							_hover={{ bgColor: 'primero' }}
						>
							Sumate a la moda circular
						</Button>
					</Link>
				</Stack>
				<Stack w='55%' h='100%' justify="center">
					{View}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default HomeLanding;
