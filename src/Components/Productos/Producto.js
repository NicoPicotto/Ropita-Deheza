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
	StackDivider,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
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
	id,
}) => {
	//Formatear fecha recibida para que aparezca en las cards
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Card w='sm'>
			<CardBody>
				<Image
					src={imagen}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
					objectFit='cover'
					h="sm"
					w="100%"
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md' color='segundo'>
						{titulo}
					</Heading>
					<Text noOfLines={2} textOverflow='ellipsis'>{descripcion}</Text>
					<Stack
						direction='row'
						align='center'
						spacing={2}
						divider={<StackDivider />}
					>
						<Text color='segundo' as='b' fontSize='2xl'>
							$ {precio}
						</Text>
						<Text color='cuarto' as='b'>
							Talle: {talle}
						</Text>
					</Stack>
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
					<Link as={ReachLink} to={`/producto/${id}`} _hover={{}}>
						<Button
							variant='solid'
							bgColor='segundo'
							color='white'
							leftIcon={<BsCheckCircleFill />}
							_hover={{ bgColor: 'cuarto' }}
						>
							Lo quiero
						</Button>
					</Link>
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
