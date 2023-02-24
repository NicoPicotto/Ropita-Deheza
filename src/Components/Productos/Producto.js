import React from 'react';
import {
	Stack,
	Image,
	Heading,
	Text,
	Button,
	Card,
	Divider,
	StackDivider,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';

const Producto = ({
	titulo,
	imagen,
	talle,
	precio,
	fecha,
	id,
}) => {
	//Formatear fecha recibida para que aparezca en las cards
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Card
			w='xs'
			p={3}
			h='md'
			justify='space-between'
			shadow='md'
			transition="0.2s"
			_hover={{ shadow: "lg" }}
		>
			<Stack>
				<Image
					src={imagen}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
					objectFit='cover'
					h='2xs'
					w='100%'
				/>
				<Stack>
					<Heading
						size='md'
						fontFamily="fonts.heading"
						fontWeight="regular"
						color='tercero'
						textOverflow='ellipsis'
						overflow='hidden'
						noOfLines={1}
						textTransform="capitalize"
					>
						{titulo}
					</Heading>
					<Stack
						direction='row'
						align='center'
						spacing={2}
						divider={<StackDivider />}
					>
						<Text color='segundo'
						as="b" fontSize='2xl'>
							$ {precio}
						</Text>
						<Text color='tercero' as='b' textTransform="uppercase">
							Talle: {talle}
						</Text>
					</Stack>
				</Stack>
			</Stack>
			<Text fontSize='sm' as='i' color='tercero'>
				{' '}
				Publicado el {fechaFormateada}
			</Text>
			<Stack>
				<Divider borderColor='cuarto' alignSelf='center' />
				<Link as={ReachLink} to={`/producto/${id}`} _hover={{}} w='100%'>
					<Button
						variant='solid'
						w='100%'
						bgColor='segundo'
						color='white'
						leftIcon={<FaHandPointRight />}
						_hover={{ bgColor: 'cuarto' }}
					>
						Me interesa
					</Button>
				</Link>
			</Stack>
		</Card>
	);
};

export default Producto;
