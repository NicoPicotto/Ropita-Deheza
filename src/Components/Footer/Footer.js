import React from 'react';
import { Stack, Text, Button, Link, StackDivider } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { IoMdHelpCircle, IoIosPaper } from 'react-icons/io';

const Footer = () => {
	return (
		<Stack
			w='100%'
			bgColor='tercero'
			justify='space-between'
			align='center'
			h="75px"
			paddingX={10}
			direction='row'
			bottom={0}
		>
			<Stack spacing={1}>
				
				<Text fontSize='sm' color='fondo'>
					Creado por {''}
					<Link
						as='a'
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
	);
};

export default Footer;
