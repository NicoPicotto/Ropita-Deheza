import React from 'react';
import {
	Stack,
	Heading,
	Text,
	Image,
	useMediaQuery,
	Divider,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
import tut1 from '../../modal1.png';
import tut2 from '../../modal2.png';
import tut3 from '../../modal3.png';

const TutorialComponent = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			align='center'
			w={isMobile ? '100%' : '4xl'}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
		>
			<Stack w='100%' align='center'>
				<Heading
					size={isMobile ? 'md' : 'lg'}
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
					overflow='hidden'
					textAlign='center'
				>
					¿Cómo funciona No Cuelgues?
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				w='100%'
				justify='space-between'
			>
				<Stack w={isMobile ? '100%' : '30%'} align='center'>
					<Image src={tut3} h='auto' />
					<Heading color='segundo' size='2xs' textAlign='center'>
						¿Querés vender o regalar algo?
					</Heading>
					<Divider borderColor='cuarto' />
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Primero debés{' '}
							<Link
								as={ReachLink}
								to='/register'
								color='segundo'
								fontWeight='bold'
							>
								registrarte
							</Link>{' '}
							o{' '}
							<Link
								as={ReachLink}
								to='/login'
								color='segundo'
								fontWeight='bold'
							>
								ingresar
							</Link>{' '}
							con tu cuenta.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Luego, en la sección "Agregar" vas a poder cargar imágenes,
							descripción, precio y más detalles del producto.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Una vez publicado será visible para todos y te podrán contactar
							vía Whatsapp para comprarlo/recibirlo.
						</Text>
					</Stack>
				</Stack>
				<Stack w={isMobile ? '100%' : '30%'} align='center'>
					<Image src={tut1} h='auto' />
					<Heading color='segundo' size='2xs' textAlign='center'>
						¿Buscás algo de segunda mano?
					</Heading>
					<Divider borderColor='cuarto' />
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							No es necesario que te registres ni que brindes datos sobre vos.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Podés navegar en el home e ir filtrando por categorías hasta
							encontrar algo que te guste.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Una vez que encontraste algo, vas a poder contactar vía whatsapp
							al propietario para coordinar la entrega.
						</Text>
					</Stack>
				</Stack>
				<Stack w={isMobile ? '100%' : '30%'} align='center'>
					<Image src={tut2} h='auto' />
					<Heading color='segundo' size='2xs' textAlign='center'>
						Más información importante
					</Heading>
					<Divider borderColor='cuarto' />
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Una vez logeado, en la sección "Perfil" vas a poder modificar tus
							datos.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							Si tenés alguna duda, podés revisar el{' '}
							<Link
								as={ReachLink}
								to='/ayuda'
								color='segundo'
								fontWeight='bold'
							>
								Centro de ayuda
							</Link>{' '}
							donde vas a encontrar respuesta a las preguntas frecuentes.
						</Text>
					</Stack>
					<Stack direction='row' w='100%'>
						<FaHandPointRight color='#8A7DD8' />
						<Text fontSize='xs' w='95%'>
							No olvides revisar también las{' '}
							<Link
								as={ReachLink}
								to='/reglas'
								color='segundo'
								fontWeight='bold'
							>
								Reglas del sitio
							</Link>{' '}
							.
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default TutorialComponent;
