import React from 'react';
import { Stack, Text, Button, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import {IoMdHelpCircle} from "react-icons/io"

const Footer = () => {
	return (
		<Stack
			w='100%'
			bgColor='primero'
			justify='space-between'
			align='center'
			p={5}
			direction='row'
			bottom={0}
		>
			<Stack>
				<Text fontSize='sm' color='white'>
					Creado por {""}
					<Link as="a" color='white' href="https://nicopicotto.com/" target="_blank">Nicolás Picotto</Link>
                    . Todos los derechos reservados.
				</Text>
			</Stack>
			<Stack direction='row' spacing={5}>
				<Link as={ReachLink} to='/ayuda'>
					<Button size='sm' variant='link' leftIcon={<IoMdHelpCircle />}>
						Centro de ayuda
					</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default Footer;
