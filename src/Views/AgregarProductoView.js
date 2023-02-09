import React from 'react'
import { Stack, Heading } from '@chakra-ui/react';
import NuevoProducto from '../Components/NuevoProducto/NuevoProducto';
import Aclaraciones from '../Components/NuevoProducto/Aclaraciones';

const AgregarProductoView = () => {
  return (
    <Stack bgColor='fondo' justify="center" p={5} w='100vw' h="100vh" spacing={5} align="center">
        <NuevoProducto />
        <Aclaraciones />
    </Stack>
  )
}

export default AgregarProductoView