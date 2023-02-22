import React from 'react'
import { Stack } from '@chakra-ui/react';
import HelpAccordion from '../Components/Help/HelpAccordion';

const HelpView = () => {
  return (
    <Stack bgColor='fondo' h='100vh' align='center' justify="center">
        <HelpAccordion />
    </Stack>
  )
}

export default HelpView