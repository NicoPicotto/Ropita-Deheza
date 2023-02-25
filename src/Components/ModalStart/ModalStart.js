import React, { useState, useEffect } from 'react';
import {
	Modal,
	ModalHeader,
	ModalOverlay,
	ModalFooter,
	ModalContent,
	Button,
	Image,
	ModalBody,
	useDisclosure,
	Highlight,
	Text,
	Stack,
	Slide,
} from '@chakra-ui/react';
import modal1 from '../../modal1.png';
import modal2 from '../../modal2.png';
import modal3 from '../../modal3.png';

const ModalStart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [page, setPage] = useState(1);

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
			<ModalContent align='center'>
				<ModalBody align='center'>
					<Stack display={page == 1 ? 'block' : 'none'}>
						<Image w='80%' src={modal1} />
						<Highlight
							query={['indumentaria', 'accesorios', 'segunda mano']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							¡Bienvenidx! En "No Cuelgues" vas a poder poner a la venta o
							regalar la indumentaria o accesorios que ya no utilices, así como
							también encontrar cositas lindas de segunda mano para vos.
						</Highlight>
					</Stack>

					<Stack display={page == 2 ? 'block' : 'none'}>
						<Image w='80%' src={modal2} />
						<Highlight
							query={['no es necesario que te registres', ' propietario']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							Si te interesa algún producto publicado, no es necesario que te
							registres, el contacto se realiza vía Whatsapp directamente con el
							propietario de la prenda o accesorio.
						</Highlight>
					</Stack>
					<Stack display={page == 3 ? 'block' : 'none'}>
						<Image w='80%' src={modal3} />
						<Highlight
							query={['no es necesario que te registres', ' propietario']}
							styles={{ fontWeight: 'bolder', color: 'segundo' }}
						>
							Si querés vender o regalar tus prendas, es necesario que te
							inicies sesión (O si no tenés cuenta te registres) y brindes
							algunos datos básicos de contacto. ¡Gracias por sumarte!
						</Highlight>
					</Stack>
				</ModalBody>
				<ModalFooter justifyContent='center'>
					<Stack direction='row' w='50%' justify='center'>
						<Button
							borderRadius={100}
							size='xs'
							colorScheme='whatsapp'
							variant={page == 1 ? 'solid' : 'outline'}
							onClick={() => setPage(1)}
						/>
						<Button
							borderRadius={100}
							size='xs'
							colorScheme='whatsapp'
							variant={page == 2 ? 'solid' : 'outline'}
							onClick={() => setPage(2)}
						/>
						<Button
							borderRadius={100}
							size='xs'
							colorScheme='whatsapp'
							variant={page == 3 ? 'solid' : 'outline'}
							onClick={() => setPage(3)}
						/>
					</Stack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalStart;
