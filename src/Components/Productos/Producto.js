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
		<Card w='xs'>
			<CardBody>
				<Image
					src={imagen}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
					objectFit='cover'
					h='xs'
					w='100%'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md' color='segundo'>
						{titulo}
					</Heading>
					<Text noOfLines={2} textOverflow='ellipsis'>
						{descripcion}
					</Text>
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
				<Text fontSize='sm' as='i' color='tercero'>
					{' '}
					Publicado el {fechaFormateada}
				</Text>
			</CardBody>
			<Divider borderColor='cuarto' w='90%' alignSelf='center' />
			<CardFooter>
				<Link as={ReachLink} to={`/producto/${id}`} _hover={{}} w='100%'>
					<Button
						variant='solid'
						w='100%'
						bgColor='segundo'
						color='white'
						leftIcon={<BsCheckCircleFill />}
						_hover={{ bgColor: 'cuarto' }}
					>
						Lo quiero
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default Producto;
