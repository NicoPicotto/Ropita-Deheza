import React from 'react';
import {
	Stack,
	Text,
	Button,
	Link,
	StackDivider,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { IoMdHelpCircle, IoIosPaper } from 'react-icons/io';

const Footer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			w='100vw'
			h={!isMobile && "75px"}
			bgColor='tercero'
			justify='center'
			align='center'
			zIndex={100}
			bottom={0}
		>
			<Stack
				direction={isMobile ? 'column-reverse' : 'row'}
				justify='space-between'
				align='center'
				w={isMobile ? '90%' : '4xl'}
				paddingBlock={isMobile && 5}
			>
				<Stack spacing={1}>
					<Text fontSize={isMobile ? "xs" : "sm"} color='fondo' textAlign={isMobile && 'center'}>
						Creado por {''}
						<Link
							as='a'
							fontWeight='bold'
							color='white'
							href='https://nicopicotto.com/'
							target='_blank'
						>
							Nicolás Picotto
						</Link>
						. Todos los derechos reservados.
					</Text>
				</Stack>
				<Stack direction='row' divider={<StackDivider />}>
					<Link as={ReachLink} to='/ayuda'>
						<Button
							color='fondo'
							size='sm'
							variant='link'
							leftIcon={<IoMdHelpCircle />}
						>
							Centro de ayuda
						</Button>
					</Link>
					<Link as={ReachLink} to='/reglas'>
						<Button
							color='fondo'
							size='sm'
							variant='link'
							leftIcon={<IoIosPaper />}
						>
							Reglas del sitio
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
