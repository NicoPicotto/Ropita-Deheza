import React from 'react';
import {
	Stack,
	Accordion,
	AccordionItem,
	Box,
	AccordionIcon,
	AccordionButton,
	AccordionPanel,
	Heading,
	Divider,
} from '@chakra-ui/react';

const HelpAccordion = () => {
	return (
		<Stack
			align='center'
			w='4xl'
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
		>
			<Stack w='100%' align='center'>
				<Heading
					size='lg'
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					Preguntas frecuentes
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Accordion allowToggle w='100%'>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							¿Debo tener una cuenta para publicar un producto?
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						Sí. Es necesario tener una cuenta y brindar datos básicos de
						contacto para generar seguridad y respondabilidad a la hora de
						publicar un producto.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							¿Debo tener una cuenta para comprar un producto?
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						No. El proceso de compra/adquisición no necesita un inicio de sesión
						ni datos de contacto ya que se concreta vía Whatsapp directamente
						con el propietario.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							¿Que sucede luego de que publico un producto?
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						El producto estará visible para todo el mundo al igual que tu nombre
						y teléfono. En caso de existir un interesado/a, éste se contactará
						vía Whatsapp para concretar la entrega y el pago (si lo hubiese). Si
						la compra se concreta, recordá eliminarlo desde la sección "Perfil -
						Mis productos" para que ya no aparezca como disponible.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							Quiero agregar varias fotos del producto.
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						Lamentablemente, por el momento, únicamente es posible subir 1 (una)
						imagen por producto. Estamos trabajando para mejorar esta
						funcionalidad.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							Ya entregué mi producto ¿Ahora qué?
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						Si la entrega se concretó con éxito, recordá eliminarlo desde la
						sección "Perfil - Mis productos" para que ya no aparezca como
						disponible.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
						<Box as='span' flex='1' textAlign='left'>
							Quiero regalar una prenda, no venderla ¿Cómo hago?
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						Publicás el producto con normalidad desde la sección "Agregar", pero
						a la hora de indicar el precio colocás "0" (cero).
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default HelpAccordion;
