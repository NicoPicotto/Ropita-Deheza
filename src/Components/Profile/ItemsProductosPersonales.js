import React from "react";
import {
   Stack,
   Text,
   Button,
   StackDivider,
   Image,
   AspectRatio,
} from "@chakra-ui/react";

const ItemsProductosPersonales = ({
   titulo,
   handleDelete,
   precio,
   id,
   thumbnail,
}) => {
   return (
      <Stack
         direction='row'
         w='100%'
         bgColor='gray.50'
         p={3}
         borderRadius={5}
         shadow='sm'
         gap={3}
      >
         <AspectRatio
            ratio={1}
            w='10rem'
            borderRadius={5}
            overflow='hidden'
            border='1px solid gray'
         >
            <Image src={thumbnail} alt='producto' />
         </AspectRatio>

         <Stack w='fit-content' justify='space-between'>
            <Stack>
               {" "}
               <Text color='segundo' as='b'>
                  {titulo}
               </Text>
               <Text color='segundo'>$ {precio}</Text>{" "}
            </Stack>

            <Button
               size='sm'
               colorScheme='red'
               variant='solid'
               onClick={() => handleDelete(id)}
            >
               Eliminar
            </Button>
         </Stack>
      </Stack>
   );
};

export default ItemsProductosPersonales;
