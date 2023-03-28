import React from 'react';
import {
	Stack,
	Heading,
	Highlight,
	Button,
	Image,
	useMediaQuery,
} from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import manShopping from '../../Lotties/manShopping.json';
import { Link } from 'react-scroll';
import { FaSyncAlt } from 'react-icons/fa';
import landingHome from "../../assets/landingHome.svg"

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
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			w='100%'
			h={isMobile ? 'md' : 'lg'}
			justify='center'
			align='center'
			bgColor='segundo'
			paddingTop={isMobile && '75px'}
		>
			<Stack
				w={isMobile ? '90%' : '4xl'}
				direction={isMobile ? 'column-reverse' : 'row'}
				align='center'
				h={isMobile && '100%'}
				justify="space-between"
			>
				<Stack
					w={isMobile ? '90%' : '45%'}
					h={isMobile ? '60%' : '100%'}
					justify='center'
					align={isMobile && 'center'}
					spacing={5}
				>
					<Heading
						color='fondo'
						size='lg'
						fontFamily='fonts.heading'
						fontWeight='regular'
						textAlign={isMobile && 'center'}
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
							size={isMobile ? 'sm' : 'md'}
							fontFamily='fonts.body'
							_hover={{ bgColor: 'primero' }}
						>
							Sumate a la moda circular
						</Button>
					</Link>
				</Stack>
				<Stack
					w={isMobile ? '100%' : '40%'}
					h={isMobile ? '40%' : '100%'}
					justify='center'
				>
					{/* {View} */}
					<Image src={landingHome}/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default HomeLanding;
