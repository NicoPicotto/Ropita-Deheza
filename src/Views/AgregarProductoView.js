import React from 'react'
import { Stack, Heading } from '@chakra-ui/react';
import NuevoProducto from '../Components/NuevoProducto/NuevoProducto';
import Aclaraciones from '../Components/NuevoProducto/Aclaraciones';

const AgregarProductoView = () => {
  return (
    <Stack bgColor='fondo' justify="center" align='center' p={5} w='100vw' direction="row" spacing={5}>
        <NuevoProducto />
        <Aclaraciones />
    </Stack>
  )
}

export default AgregarProductoView