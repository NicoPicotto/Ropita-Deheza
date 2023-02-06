import React from 'react'
import { Stack } from '@chakra-ui/react';
import LoginComponent from '../Components/Auth/LoginComponent';

const LoginView = () => {
  return (
    <Stack bgColor='fondo' h='100vh' align='center'>
        <LoginComponent />
    </Stack>
  )
}

export default LoginView