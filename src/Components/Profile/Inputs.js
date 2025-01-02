import React, { useState } from "react";
import {
   Input,
   Stack,
   Button,
   SimpleGrid,
   InputGroup,
   FormLabel,
   FormControl,
} from "@chakra-ui/react";

const InputsContainer = ({
   nombre,
   apellido,
   telefono,
   email,
   handleUpdate,
}) => {
   const [nuevoNombre, setNuevoNombre] = useState(nombre);
   const [nuevoApellido, setNuevoApellido] = useState(apellido);
   const [nuevoTelefono, setNuevoTelefono] = useState(telefono);

   return (
      <Stack gap={5}>
         <SimpleGrid columns={2} spacing={5}>
            <FormControl>
               <FormLabel mb={1} fontSize='xs'>
                  Nombre
               </FormLabel>
               <Input
                  value={nuevoNombre}
                  placeholder='Nombre'
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  type='fname'
                  focusBorderColor='cuarto'
               />
            </FormControl>
            <FormControl>
               <FormLabel mb={1} fontSize='xs'>
                  Apellido
               </FormLabel>
               <Input
                  value={nuevoApellido}
                  placeholder='Apellido'
                  onChange={(e) => setNuevoApellido(e.target.value)}
                  type='lname'
                  focusBorderColor='cuarto'
               />
            </FormControl>
            <FormControl>
               <FormLabel mb={1} fontSize='xs'>
                  Teléfono (WhatsApp)
               </FormLabel>
               <Input
                  value={nuevoTelefono}
                  placeholder='Telefono - Incluir código de país - Ej: +5493584600800'
                  onChange={(e) => setNuevoTelefono(e.target.value)}
                  type='phone'
                  focusBorderColor='cuarto'
               />
            </FormControl>
            <FormControl>
               <FormLabel mb={1} fontSize='xs'>
                  Email
               </FormLabel>
               <Input value={email} isDisabled />
            </FormControl>
         </SimpleGrid>
         <Stack w='fit-content'>
            <Button
               color='white'
               bgColor='segundo'
               _hover={{ bgColor: "cuarto" }}
               onClick={() =>
                  handleUpdate(nuevoNombre, nuevoApellido, nuevoTelefono)
               }
            >
               Actualizar Datos
            </Button>
         </Stack>
      </Stack>
   );
};

export default InputsContainer;
