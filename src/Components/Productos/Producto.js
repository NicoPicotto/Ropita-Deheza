import React from 'react';
import {
	Stack,
	Image,
	Heading,
	Text,
	Button,
	Card,
	CardBody,
	Divider,
	CardFooter,
	ButtonGroup,
} from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Producto = ({
	titulo,
	descripcion,
	imagen,
	talle,
	precio,
	nombre,
	telefono,
	activo,
	fecha,
}) => {

	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src={imagen}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md' color='segundo'>
						{titulo}
					</Heading>
					<Text>{descripcion}</Text>
					<Text bgColor='cuarto' p={1} w='fit-content'>
						Talle: {talle}
					</Text>
					<Text color='segundo' as='b' fontSize='2xl'>
						$ {precio}
					</Text>
				</Stack>
			</CardBody>
			<Divider borderColor='cuarto' w='90%' alignSelf='center' />
			<CardFooter>
				<ButtonGroup
					spacing='2'
					alignItems='center'
					w='100%'
					justifyContent='space-between'
				>
					<Button
						variant='solid'
						bgColor='segundo'
						color='white'
						leftIcon={<BsCheckCircleFill />}
						_hover={{ bgColor: 'cuarto' }}
					>
						Lo quiero
					</Button>
					<Text fontSize='sm' as='i'>
						{' '}
						Publicado el {fechaFormateada}
					</Text>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default Producto;
