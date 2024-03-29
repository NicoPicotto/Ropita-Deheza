import React, { useState, useEffect } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalFooter,
	ModalContent,
	Image,
	useDisclosure,
	Highlight,
	Stack,
	Radio,
	RadioGroup,
	useMediaQuery,
} from '@chakra-ui/react';
import modal1 from '../../assets/modal1.svg';
import modal2 from '../../assets/modal2.svg';
import modal3 from '../../assets/modal3.svg';

const ModalStart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const [value, setValue] = useState('1');

	useEffect(() => {
		onOpen();
	}, []);

	const handleClose = () => {
		onClose();
		localStorage.setItem('opened', false);
	};

	return (
		<Modal
			onClose={handleClose}
			isOpen={isOpen}
			isCentered
			w='lg'
			h='50vh'
			motionPreset='slideInBottom'
		>
			<ModalOverlay />
			<ModalContent alignItems='center' w={isMobile && '80%'} h='lg'>
				<Stack align='center' justify='center' w='80%' h='100%'  >
					<Stack display={value == 1 ? 'block' : 'none'} textAlign='center' align="center">
						<Image  src={modal1} marginBottom={5}/>
						<Highlight
							query={['indumentaria', 'accesorios', 'segunda mano']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							¡Bienvenidx! En "No Cuelgues" vas a poder poner a la venta o
							regalar la indumentaria o accesorios que ya no utilices, así como
							también encontrar cositas lindas de segunda mano para vos.
						</Highlight>
					</Stack>
					<Stack display={value == 2 ? 'block' : 'none'} textAlign='center' align="center">
						<Image marginBottom={5} src={modal2} />
						<Highlight
							query={['no es necesario', ' propietario']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							Si te interesa algún producto publicado, no es necesario que te
							registres, el contacto se realiza vía Whatsapp directamente con el
							propietario de la prenda o accesorio.
						</Highlight>
					</Stack>
					<Stack display={value == 3 ? 'block' : 'none'} textAlign='center' align="center">
						<Image marginBottom={5} src={modal3} />
						<Highlight
							query={['no es necesario que te registres', ' propietario']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							Si querés vender o regalar tus prendas, es necesario que te
							registres y brindes algunos datos básicos de contacto. ¡Estamos
							contentos de que te sumes a la moda circular!
						</Highlight>
					</Stack>
				</Stack>
				<ModalFooter justifyContent='center'>
					<RadioGroup p={1} onChange={setValue} value={value}>
						<Stack spacing={5} justifyContent='space-between' direction='row'>
							<Radio
								borderColor='cuarto'
								_checked={{
									bg: 'cuarto',
								}}
								value='1'
								size='md'
								_focus={{ shadow: 'none' }}
							/>
							<Radio
								borderColor='cuarto'
								_checked={{
									bg: 'cuarto',
								}}
								value='2'
								size='md'
								_focus={{ shadow: 'none' }}
							/>
							<Radio
								borderColor='cuarto'
								_checked={{
									bg: 'cuarto',
								}}
								value='3'
								size='md'
								_focus={{ shadow: 'none' }}
							/>
						</Stack>
					</RadioGroup>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalStart;
