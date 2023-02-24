import React from 'react';
import {
	Stack,
	Divider,
	Text,
	Button,
	Heading,
	Image,
	StackDivider,
} from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';

const DetallesAdentro = ({
	key,
	descripcion,
	fecha,
	nombre,
	apellido,
	precio,
	talle,
	telefono,
	titulo,
	imagen,
	id,
}) => {
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Stack w='100%'>
			<Stack align='center' marginBottom={3}>
				<Heading
					size='lg'
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					Detalles del producto
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack spacing={5} align='center' direction='row' h='350px' w='100%'>
				<Stack
					h='100%'
					borderRadius={10}
					w='50%'
					align='center'
					justify='center'
				>
					<Image
						h='100%'
						w='100%'
						src={imagen}
						alt='Imagen del producto'
						objectFit='contain'
					/>
				</Stack>
				<Stack h='100%' w='50%' justify='space-between'>
					<Stack>
						<Heading
							color='tercero'
							fontFamily='fonts.heading'
							fontWeight='regular'
							size='md'
							textOverflow='ellipsis'
							overflow='hidden'
							noOfLines={2}
							textTransform='capitalize'
						>
							{titulo}
						</Heading>
					</Stack>
					<Stack flex={1} overflowY='scroll'>
						<Text>{descripcion}</Text>
					</Stack>
					<Stack divider={<StackDivider />} direction='row' align='center'>
						<Text color='segundo' fontSize='xl' as='b'>
							$ {precio}
						</Text>
						<Text color='tercero' fontSize='md' textTransform='uppercase'>
							Talle {talle}
						</Text>
					</Stack>
					<Stack>
						<Stack>
							<Text fontSize='sm'>
								Producto publicado por{' '}
								<Text as='b' fontSize='sm' color='segundo'>
									{nombre} {apellido}{' '}
								</Text>{' '}
								el{' '}
								<Text as='b' fontSize='sm' color='segundo'>
									{fechaFormateada}
								</Text>
								.
							</Text>
						</Stack>
						<Button
							as='a'
							target='_blank'
							leftIcon={<BsWhatsapp fontSize='18px' />}
							colorScheme='whatsapp'
							href={`https://wa.me/${telefono}?text=¡Hola! Me interesa tu producto ${titulo}.`}
						>
							Contactar a {nombre}
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default DetallesAdentro;
