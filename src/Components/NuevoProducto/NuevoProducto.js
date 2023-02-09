import React from 'react';
import {
	Heading,
	Stack,
	Input,
	Image,
	Button,
	Select,
	Textarea,
	Tooltip,
	Text,
} from '@chakra-ui/react';

const NuevoProducto = () => {
	return (
		<Stack
			align='center'
			w='1000px'
			bgColor='white'
			borderRadius={5}
			p={5}
			shadow='md'
			justify='space-between'
			as='form'
		>
			<Heading size='lg' color='segundo'>
				Agregar producto
			</Heading>
			<Stack spacing={5} align='center' direction='row' h='350px'>
				<Stack bgColor='fondo' p={5} h='100%'>
					<Image
						src='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
						alt='Imagen del producto'
					/>
					<Input type='file' variant='flushed' />
				</Stack>
				<Stack w='100%' h='100%' justify='space-between'>
					<Stack>
						<Input
							variant='outline'
							placeholder='Título del producto. Ej: Remera lisa.'
							focusBorderColor='cuarto'
						/>
					</Stack>
					<Stack flex={1}>
						<Textarea
							h="100%"
							variant='outline'
							placeholder='Descripción del producto. Ej: Color, tamaño, estado, detalles, etc.'
							focusBorderColor='cuarto'
						/>
					</Stack>
					<Stack direction='row'>
						<Tooltip
							label='Si lo que estás publicando no tiene talle podés dejarlo vacío. Ej: Una gorra.'
							bgColor='cuarto'
							color='white'
							placement='left'
						>
							<Select
								variant='outline'
								w='50%'
								focusBorderColor='cuarto'
								placeholder='Talle'
							>
								<option value='XS'>XS</option>
								<option value='XS'>S</option>
								<option value='XS'>M</option>
								<option value='XS'>L</option>
								<option value='XS'>XL</option>
								<option value='XS'>XXL</option>
								<option value='XS'>Talle único</option>
							</Select>
						</Tooltip>
						<Tooltip
							label='Recordá que si tu intención es regalarlo, podés ponerle $0'
							bgColor='cuarto'
							color='white'
							placement='right'
						>
							<Input
								variant='outline'
								placeholder='$0'
								w='50%'
								focusBorderColor='cuarto'
								type='number'
							/>
						</Tooltip>
					</Stack>
					<Stack>
						<Tooltip
							label='¡Atención! Estás a punto de publicar un producto, esto implica que, al entrar al producto, las personas podrán ver tu nombre y número telefónico.'
							bgColor='segundo'
							placement='right'
						>
							<Button
								bgColor='segundo'
								color='white'
								_hover={{ bgColor: 'cuarto' }}
							>
								Publicar producto
							</Button>
						</Tooltip>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default NuevoProducto;
