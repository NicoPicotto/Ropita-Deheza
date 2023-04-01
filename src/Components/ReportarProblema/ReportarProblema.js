import React, { useRef, useState } from 'react';
import {
	Stack,
	Input,
	Button,
	Heading,
	Divider,
	useMediaQuery,
	Text,
	Textarea,
	useToast,
	Spinner,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

const ReportarProblema = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const emailRef = useRef();
	const problemRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		setIsLoading(true);

		const templateParams = {
			email: emailRef.current.value,
			message: problemRef.current.value,
		};

		emailjs
			.send(
				'service_yr348pd',
				'template_xa5nzcc',
				templateParams,
				'cZtBUVEwTm1-DRtsb'
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsLoading(false);
					toast({
						title: 'Problema reportado',
						description: 'Nos pondremos en contacto a la brevedad.',
						status: 'success',
						duration: 3000,
						isClosable: false,
					});
				},
				(error) => {
					console.log(error.text);
					setIsLoading(false);
					toast({
						title: 'Ocurrió un error',
						description: 'Ponete en contacto con nosotros a la brevedad.',
						status: 'error',
						duration: 3000,
						isClosable: false,
					});
				}
			);
	};

	return (
		<Stack
			align='center'
			w={isMobile ? '100%' : '4xl'}
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
			spacing={5}
			onSubmit={sendEmail}
		>
			<Stack w='100%' align='center'>
				<Heading
					size={isMobile ? 'md' : 'lg'}
					color='segundo'
					fontFamily='fonts.heading'
					fontWeight='regular'
				>
					Reportar un problema
				</Heading>
				<Divider borderColor='cuarto' />
			</Stack>
			<Stack align='center' w='100%' spacing={5}>
				<Stack w='100%' spacing={5}>
					<Stack>
						<Text margin={0} fontSize='sm' color='tercero' as='b'>
							Correo electrónico
						</Text>
						<Input
							variant='outline'
							ref={emailRef}
							placeholder='juanperez@gmail.com'
							type='email'
							name='email'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
					<Stack>
						<Text margin={0} fontSize='sm' color='tercero' as='b'>
							Problema
						</Text>
						<Textarea
							variant='outline'
							ref={problemRef}
							placeholder='Relatanos tu problema lo más detallado posible...'
							type='text'
							name='message'
							focusBorderColor='cuarto'
							isRequired
						/>
					</Stack>
				</Stack>
				<Stack w='100%'>
					<Button
						w='fit-content'
						color='white'
						type='submit'
						bgColor='segundo'
						_hover={{ bgColor: 'cuarto' }}
					>
						{' '}
						{isLoading ? <Spinner color='white' /> : 'Enviar reporte'}
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ReportarProblema;
