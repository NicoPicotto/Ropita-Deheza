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
import { IoSyncCircleSharp } from 'react-icons/io5';
import { MdLabelOff } from 'react-icons/md';

const Aclaraciones = () => {
	return (
		<Stack
			w='900px'
			divider={<StackDivider borderColor='cuarto' />}
			justify='center'
			direction='row'
			align='center'
		>
			<Stack
				justify='center'
				direction='row'
				borderRadius={5}
				p={2}
				align='center'
			>
				<Icon as={MdLabelOff} fontSize='6xl' color='segundo' />
				<Text fontSize='xs' color='primero'>
					Los productos deben ser si o si de segunda mano. La plataforma no debe
					utilizarse para comercializar productos nuevos.
				</Text>
			</Stack>
			<Stack
				align='center'
				justify='center'
				direction='row'
				borderRadius={5}
				p={2}
			>
				<Icon as={IoSyncCircleSharp} fontSize='6xl' color='segundo' />
				<Text fontSize='xs' color='primero'>
					El objetivo es promover la moda circular. Podés vender tu prenda o
					también regarlarla poniéndole precio $0.
				</Text>
			</Stack>
			<Stack
				align='center'
				justify='center'
				direction='row'
				borderRadius={5}
				p={2}
			>
				<Icon as={IoLogoWhatsapp} fontSize='6xl' color='segundo' />
				<Text fontSize='xs' color='primero'>
					En caso de haber un interesado, él o ella se contactará con vos vía
					Whatsapp para arreglar la entrega y el pago.
				</Text>
			</Stack>
		</Stack>
	);
};

export default Aclaraciones;
