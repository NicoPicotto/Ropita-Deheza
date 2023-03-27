import React, { useState } from 'react';
import {
	Stack,
	Divider,
	Text,
	Button,
	Heading,
	Image,
	Flex,
	StackDivider,
	useMediaQuery,
	Modal,
	ModalOverlay,
	ModalContent,
	useDisclosure,
	ModalBody,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
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
	const [imageShow, setImageShow] = useState(0);
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Stack w='100%'>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset='slideInBottom'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Image src={imagen[imageShow]} />
					</ModalBody>
				</ModalContent>
			</Modal>{' '}
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
				h={isMobile ? '100%' : 'md'}
			>
				<Stack
					bgImage={imagen[imageShow]}
					bgPos='center'
					bgRepeat='no-repeat'
					bgSize='cover'
					h={isMobile ? 'xs' : '100%'}
					borderRadius={10}
					w={isMobile ? '100%' : '50%'}
					direction='row'
					align='center'
					justify='space-between'
				>
					<Button
						variant='unstyled'
						h='100%'
						borderRadius={0}
						bgColor='rgb(0,0,0, 0.4)'
						p={0}
						color='white'
						_hover={{ paddingRight: 1 }}
						transition='0.2s ease-in-out'
						visibility={imageShow > 0 ? 'visible' : 'hidden'}
						onClick={() => {
							imageShow > 0 && setImageShow(imageShow - 1);
						}}
					>
						<ChevronLeftIcon fontSize='4xl' textShadow='md' />
					</Button>
					<Flex w='100%' h='100%' onClick={onOpen} cursor='zoom-in' />
					<Button
						variant='unstyled'
						h='100%'
						borderRadius={0}
						bgColor='rgb(0,0,0, 0.4)'
						p={0}
						color='white'
						_hover={{ paddingLeft: 1 }}
						transition='0.1s ease-in'
						visibility={imageShow < imagen.length - 1 ? 'visible' : 'hidden'}
						onClick={() => {
							imageShow < imagen.length - 1 && setImageShow(imageShow + 1);
						}}
					>
						<ChevronRightIcon fontSize='4xl' textShadow='md' />
					</Button>
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
