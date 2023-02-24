import React from 'react';
import { Stack, Text, Button, Link, Image } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { IoMdHelpCircle } from 'react-icons/io';
import logo2 from '../../logo2.png';

const Footer = () => {
	return (
		<Stack
			w='100%'
			bgColor='tercero'
			justify='space-between'
			align='center'
			p={5}
			direction='row'
			bottom={0}
		>
			<Stack>
				<Stack>
					<Image src={logo2} w='150px' objectFit='contain' />
				</Stack>
				<Text fontSize='xs' color='fondo'>
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
			<Stack direction='row' spacing={5}>
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
			</Stack>
		</Stack>
	);
};

export default Footer;
