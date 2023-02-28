import React, { useState } from 'react';
import {
	Stack,
	Divider,
	Text,
	Button,
	Heading,
	Image,
	StackDivider,
	useMediaQuery,
} from '@chakra-ui/react';
import ModalImage from 'react-modal-image';
import './modalImage.css';
import { BsWhatsapp } from 'react-icons/bs';

const DetallesAdentro = ({
	descripcion,
	fecha,
	nombre,
	apellido,
	precio,
	talle,
	telefono,
	titulo,
	imagen,
}) => {
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');
	const [imageShow, setImageShow] = useState(imagen[0]);
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack w='100%'>
			<Stack align='center' marginBottom={3}>
				<Heading
					size={isMobile ? 'md' : 'lg'}
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
					overflow='hidden'
				>
					Detalles del producto
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack
				spacing={5}
				align='center'
				direction={isMobile ? 'column' : 'row'}
				w='100%'
				h={isMobile ? '100%' : 'xs'}
			>
				<Stack
					bgColor='fondo'
					h={isMobile ? 'xs' : '100%'}
					borderRadius={10}
					w={isMobile ? '100%' : '50%'}
					align='center'
					justify='center'
				>
					<Stack
						direction={isMobile ? 'column-reverse' : 'row'}
						w='100%'
						h='100%'
					>
						<Stack
							w={isMobile ? '100%' : '25%'}
							direction={isMobile ? 'row' : 'column'}
							h={isMobile && '25%'}
						>
							{imagen.map((img) => (
								<Image
									h={isMobile ? '100%' : '33%'}
									cursor='pointer'
									key={img}
									w={isMobile ? '33%' : '100%'}
									src={img}
									alt={titulo}
									objectFit='cover'
									onClick={() => setImageShow(img)}
								/>
							))}
						</Stack>
						<Stack w={isMobile ? '100%' : '75%'} h={isMobile && '75%'}>
							<ModalImage
								className='modalImg'
								small={imageShow}
								large={imageShow}
								alt={titulo}
								hideDownload={true}
							/>
						</Stack>
					</Stack>
				</Stack>
				<Stack h='100%' w={isMobile ? '100%' : '50%'} justify='space-between'>
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
							<Text fontSize={isMobile ? 'xs' : 'sm'}>
								Publicado por{' '}
								<Text as='b' fontSize={isMobile ? 'xs' : 'sm'} color='segundo'>
									{nombre} {apellido}{' '}
								</Text>{' '}
								el{' '}
								<Text as='b' fontSize={isMobile ? 'xs' : 'sm'} color='segundo'>
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
