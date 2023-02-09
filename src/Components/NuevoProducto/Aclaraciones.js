import React from 'react';
import {
	Highlight,
	Stack,
	Input,
	Button,
	Text,
	Tooltip,
    StackDivider,
	Icon,
} from '@chakra-ui/react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdLabelOff } from 'react-icons/md';

const Aclaraciones = () => {
	return (
		<Stack h='900px' justify='center' divider={<StackDivider borderColor="cuarto"/>}>
			<Stack
				align='center'
				justify='center'
				direction='row'
				w='500px'
				h='120px'
				borderRadius={5}
				p={5}
			>
				<Icon as={MdLabelOff} fontSize='6xl' color='segundo' />
				<Text fontSize='sm'>
					Los productos deben ser si o si de segunda mano. La plataforma no debe
					utilizarse para comercializar productos nuevos.
				</Text>
			</Stack>
			<Stack
				align='center'
				justify='center'
				direction='row'
				w='500px'
				h='120px'
				borderRadius={5}
				p={5}
			>
				<Icon as={MdLabelOff} fontSize='6xl' color='segundo' />
				<Text fontSize='sm' color='primero'>
					Los productos deben ser si o si de segunda mano. La plataforma no debe
					utilizarse para comercializar productos nuevos.
				</Text>
			</Stack>
			<Stack
				align='center'
				justify='center'
				direction='row'
				w='500px'
				h='120px'
				borderRadius={5}
				p={5}
			>
				<Icon as={IoLogoWhatsapp} fontSize='6xl' color='segundo' />
				<Text fontSize='sm' color='primero'>
					En caso de haber algún interesado, él o ella se contactará con vos vía
					Whatsapp para arreglar la entrega y el pago.
				</Text>
			</Stack>
		</Stack>
	);
};

export default Aclaraciones;
